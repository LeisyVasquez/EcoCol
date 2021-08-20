package com.ecocol.serverSpringBoot.services;

import java.util.ArrayList;
import java.util.Optional;

import com.ecocol.serverSpringBoot.models.PhotoModel;
import com.ecocol.serverSpringBoot.repositories.PhotoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhotoService {
    @Autowired
    PhotoRepository PhotoRepository;
    
    public ArrayList<PhotoModel> obtenerPhoto(){
        return (ArrayList<PhotoModel>) PhotoRepository.findAll();
    }

    public PhotoModel guardarPhoto(PhotoModel Photo){
        return PhotoRepository.save(Photo);
    }

    public Optional<PhotoModel> obtenerPorId(Long id){
        return PhotoRepository.findById(id);
    }


    public ArrayList<PhotoModel>  obtenerPorIdplace(String id_place) {
        return PhotoRepository.findByIdplace(id_place);
    } 

    public boolean eliminarPhoto(Long id) {
        try{
            PhotoRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }


    
}