package com.ecocol.serverSpringBoot.models;

import javax.persistence.*;

@Entity
@Table(name = "photoPlaces")
public class PhotoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    private Long idPlace;
    private String photoPath;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdPlace() {
        return idPlace;
    }
    public void setIdPlace(Long idPlace) {
        this.idPlace = idPlace;
    }

    public String getphotoPath(){
        return photoPath;
    }
    public void setphotoPath(String photoPath){
        this.photoPath = photoPath;
    }
}