/*package com.ecocol.serverSpringBoot;

import com.google.gson.Gson;

public class Placejson {

    private static void placejson() {
        Place place =new Place(
            'name':'Jardín',
            'description':'jaja',
            'recomendation':'jaja',
            'address':'Norman',
            'hours':'Norman',
            'entryPrice':'Norman',
            'fauna':'Norman',
            'flora':'Norman'
        );
        Gson gson = new Gson(); 
        String json= gson.toJson(Place);
    }

    private static void placesjson() {
        String placeJson = "{'age':26,'email':'norman@futurestud.io','isDeveloper':true,'name':'Norman'}";

        Gson gson = new Gson();
        Place userObject = gson.fromJson(placeJson, Place.class);

    }

}*/
