package com.ecocol.serverSpringBoot.controllers;

import java.util.ArrayList;
import java.util.Optional;

import com.ecocol.serverSpringBoot.models.PhotoModel;
import com.ecocol.serverSpringBoot.services.PhotoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/photo")
public class PhotoController {
    @Autowired
    PhotoService PhotoService;

    @GetMapping()
    public ArrayList<PhotoModel> obtenerPhoto(){
        return PhotoService.obtenerPhoto();
    }

    @PostMapping()
    public PhotoModel guardarPhoto(@RequestBody PhotoModel Photo){
        return this.PhotoService.guardarPhoto(Photo);
    }

    @GetMapping( path = "/{id}")
    public Optional<PhotoModel> obtenerPhotoPorId(@PathVariable("id") Long id) {
        return this.PhotoService.obtenerPorId(id);
    }

   /* @GetMapping("/query")
    public ArrayList<PlaceModel> obtenerPlacePorPrioridad(@RequestParam("prioridad") Integer prioridad){
        return this.usuarioService.obtenerPorPrioridad(prioridad);
    } */

    @DeleteMapping( path = "/{id}")
    public String eliminarPorId(@PathVariable("id") Long id){
        boolean ok = this.PhotoService.eliminarPhoto(id);
        if (ok){
            return "Se eliminó el usuario con id " + id;
        }else{
            return "No pudo eliminar el usuario con id" + id;
        }
    }

}