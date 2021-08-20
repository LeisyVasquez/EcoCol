package com.ecocol.serverSpringBoot.repositories;

import java.util.ArrayList;

import com.ecocol.serverSpringBoot.models.PhotoModel;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhotoRepository extends CrudRepository<PhotoModel, Long> {
    public abstract ArrayList<PhotoModel> findByIdplace(String id_place);
}

   

