import styled from "styled-components";

export const SectionHeading = styled.h3`
    text-align: ${props=> props.align? props.align : 'center'};
    width: 100%;
    box-sizing: border-box;    
    margin: ${props => props.margin ? props.margin : 0};
    text-transform: uppercase;
`

export const Card = styled.div`
    margin: ${props => props.margin? props.margin : 0};
    padding: 25px;
    background-color: white;
    box-shadow: 0px 0px 6px 3px rgba(0,0,0, 0.1);
`
export const PrimaryButton = styled.button`
    color: var(--light-gray);
    border: 2px solid var(--dark-blue);
    background-color: var(--dark-blue);
    padding: 10px;
    font-weight: 600;
    margin: 10px;
    cursor: pointer;
    text-transform: uppercase;
    p {
        margin: 0;
    }
`

export const DisabledButton = styled.button` 
    color: var(--light-gray);
    border: 2px solid var(--medium-gray);
    background-color: var(--medium-gray);
    padding: 10px;
    font-weight: 600;
    margin: 10px;    
    text-transform: uppercase;
    p {
        color : var(--light-gray);
        margin: 0;
    }
`

export const SecondaryButton = styled.button`
    width: ${props => props.width ? props.width : 'auto'};
    box-shadow: 0px 0px 6px 3px rgba(0,0,0, 0.1);
    box-sizing: border-box;
    color: var(--dark-blue);
    border: 2px solid var(--dark-blue);
    background-color: white;
    font-weight: 600;
    padding: 10px;
    margin: ${props => props.margin ? props.margin : '10px'};
    cursor: pointer;
    white-space: nowrap;
    :hover{
        transition: 0.5s;
        color: var(--light-gray);
        border: 2px solid var(--dark-blue);
        background-color: var(--dark-blue);
    }
    p{
        margin: 0;
    }
`

export const DangerButton = styled.button`    
    box-sizing: border-box;
    color: var(--light-gray);
    border: 2px solid var(--error-red);
    background-color: var(--error-red);
    font-weight: 600;
    padding: 10px;    
    cursor: pointer;
    white-space: nowrap;   
    p{
        margin: 0;
    } 
    
`