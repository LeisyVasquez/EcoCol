package com.ecocol.serverSpringBoot.repositories;

import java.util.ArrayList;

import com.ecocol.serverSpringBoot.models.PlaceModel;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaceRepository extends CrudRepository<PlaceModel, Long> {
    public abstract ArrayList<PlaceModel> findByName(String name);

}