package com.ecocol.serverSpringBoot.controllers;
import java.util.ArrayList;
import java.util.Optional;

import com.ecocol.serverSpringBoot.models.PlaceModel;
import com.ecocol.serverSpringBoot.services.PlaceService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/places")
public class PlaceController {
    @Autowired
    PlaceService PlaceService;

    @GetMapping()
    public ArrayList<PlaceModel> obtenerPlace(){
        return PlaceService.obtenerPlace();
    }

    @PostMapping()
    public PlaceModel guardarUsuario(@RequestBody PlaceModel Place){
        return this.PlaceService.guardarPlace(Place);
    }

    @GetMapping( path = "/{id}")
    public Optional<PlaceModel> obtenerPlacePorId(@PathVariable("id") Long id) {
        return this.PlaceService.obtenerPorId(id);
    }

   /* @GetMapping("/query")
    public ArrayList<PlaceModel> obtenerPlacePorPrioridad(@RequestParam("prioridad") Integer prioridad){
        return this.usuarioService.obtenerPorPrioridad(prioridad);
    } */

    @DeleteMapping( path = "/{id}")
    public String eliminarPorId(@PathVariable("id") Long id){
        boolean ok = this.PlaceService.eliminarPlace(id);
        if (ok){
            return "Se eliminó el usuario con id " + id;
        }else{
            return "No pudo eliminar el usuario con id" + id;
        }
    }

}