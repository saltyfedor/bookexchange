const apiAdress = process.env.REACT_APP_API_ADRESS.replace("http", "ws");

export const createSocketMiddleware = () => {
    return store => {
        
        const socket = new WebSocket(apiAdress);
        
        socket.addEventListener("message", (message) => {
            const response = JSON.parse(message.data)
            
            //dispatch response event
            store.dispatch({
                type : response.type,
                payload: {
                    status: response.status,
                    data: response.data
                }
            });
        });

        return next => action => {            
            if (action.type === "GET_WEBSOCKET_TAGS") {
                if (socket.readyState === 1) {                    
                    if (action.payload.length > 0) {

                        //dispatch loading event for ui change
                        store.dispatch({
                            type: 'LOADING_WEBSOCKET_TAGS',
                            payload: null
                        })

                        //send websocket message
                        const getTagsPayload = {
                            type: 'GET_TAGS',
                            text: action.payload
                        }
                    
                        socket.send(JSON.stringify(getTagsPayload));

                        return;
                    } else {                        
                        store.dispatch({
                            type: 'CLEAR_WEBSOCKET_TAGS',
                            payload: null
                        })

                        return;
                    }
                }
                return;
            }            
            
            return next(action);
        }
    }
}