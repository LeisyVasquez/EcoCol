package com.ecocol.Json;

import com.google.gson.Gson;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class Fichero {
    public static void main(String[] args) {
        String fichero = "";

        try(
        BufferedReader br = new BufferedReader(new FileReader("place.json")))
        {
            String linea;
            while ((linea = br.readLine()) != null) {
                fichero += linea;
            }
    
        }catch(
        FileNotFoundException ex)
        {
            System.out.println(ex.getMessage());
        }catch(
        IOException ex)
        {
            System.out.println(ex.getMessage());
        }

        

        Gson gson = new Gson();
        Place place = gson.fromJson(fichero, Place.class);
        System.out.println(place);

    }
    

}
