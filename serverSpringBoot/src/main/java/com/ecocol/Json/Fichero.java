package com.ecocol.Json;

import com.google.gson.Gson;
//import com.google.gson.JsonArray;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class Fichero {
    static ListPlace listPlace = new ListPlace();
    public static void main(String[] args) {
        // C:/Users/maric/OneDrive/Escritorio/EcoCol/serverSpringBoot/src/main/java/com/ecocol/Json/place.json
        // C:/Users/Leisy/Documents/Poli/PPI/EcoCol/serverSpringBoot/src/main/java/com/ecocol/Json/place.json
        String fichero = "";
        String pathPlaceJson = "C:/Users/maric/OneDrive/Escritorio/EcoCol/serverSpringBoot/src/main/java/com/ecocol/Json/place.json";
        try (BufferedReader br = new BufferedReader(new FileReader(pathPlaceJson))) {
            String linea;
            while ((linea = br.readLine()) != null) {
                fichero += linea;

            }
         /*   JsonArray Places = (JSONArray) ("Place");
            Iterator<String> iterator = Places.iterator();
            while (iterator.hasNext()) {
             System.out.println(iterator.next());
            }*/

        } catch (FileNotFoundException ex) {
            System.out.println(ex.getMessage());
        } catch (IOException ex) {
            System.out.println(ex.getMessage());
        }

        Gson gson = new Gson();
        Place place = gson.fromJson(fichero, Place.class);
        System.out.println(place);
        listPlace.addPlace(place);
        listPlace.showPlaces();
        

    }

    



}
