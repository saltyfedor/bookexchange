PGDMP         6                y            keplerexchange    12.3    12.3 
               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                        1262    49227    keplerexchange    DATABASE     ?   CREATE DATABASE keplerexchange WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1251' LC_CTYPE = 'English_United States.1251';
    DROP DATABASE keplerexchange;
                postgres    false                      0    49249 
   categories 
   TABLE DATA           C   COPY public.categories (id, name, "order", additional) FROM stdin;
    public          postgres    false    205   }                 0    49260    listings 
   TABLE DATA           p   COPY public.listings (id, category_id, name, img_links, description, poster_id, added, price, type) FROM stdin;
    public          postgres    false    207    	                 0    49236    users 
   TABLE DATA           K   COPY public.users (id, email, first_name, last_name, img_link) FROM stdin;
    public          postgres    false    202   ?	       $           0    0    categories_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.categories_id_seq', 8, true);
          public          postgres    false    204            %           0    0    listings_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.listings_id_seq', 1, true);
          public          postgres    false    206            &           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 6, true);
          public          postgres    false    203               ?   x?3?=қ??????i???e?\R????wx?BnbIjQ???9??F 9cN???????o?靗?Q??p?'?8? ????$n???_z?7???B?Z???RN*?.??9HĜ3(5?(5h??o???{t}rv%?)????? O35          b   x??1
?0 ?9}??$A?''A?N???B????-G@0ǜK???ZL?V	?U%??Z? ?+?Ħ#02Yb?????O???r??t???1?7??         ?   x????
?0 @???]?Ij?(-?]?d??tӵ?X=}???;xh?
?wR1???߄????6e?1w=?mN?A8n5V?hn?Em??n????2c?9?X;ڭ?0????'>O??J.匞?*N?T??^n???`P???Ԩ???_D???=?\??K???>SQ?[?aGE???WhY?}?[?     