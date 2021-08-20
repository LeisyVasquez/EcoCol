package com.ecocol.serverSpringBoot.services;

import java.util.ArrayList;
import java.util.Optional;

import com.ecocol.serverSpringBoot.models.PlaceModel;
import com.ecocol.serverSpringBoot.repositories.PlaceRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlaceService {
    @Autowired
    PlaceRepository PlaceRepository;
    
    public ArrayList<PlaceModel> obtenerPlace(){
        return (ArrayList<PlaceModel>) PlaceRepository.findAll();
    }

    public PlaceModel guardarPlace(PlaceModel Place){
        return PlaceRepository.save(Place);
    }

    public Optional<PlaceModel> obtenerPorId(Long id){
        return PlaceRepository.findById(id);
    }


    public ArrayList<PlaceModel>  obtenerPorName(String name) {
        return PlaceRepository.findByName(name);
    } 

    public boolean eliminarPlace(Long id) {
        try{
            PlaceRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }


    
}