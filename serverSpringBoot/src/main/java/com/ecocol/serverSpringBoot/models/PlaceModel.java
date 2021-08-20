package com.ecocol.serverSpringBoot.models;

import javax.persistence.*;

@Entity
@Table(name = "places")
public class PlaceModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    //private Long codecity;
    private String name;
    //private String hashsCodeQR;
    //private String codeLOcation;
    private String description;
    private String recomendations;
    private String address;
    private String hours;
    private String entryPrice;
    private String fauna;
    private String flora;


    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    public String getRecomendations() {
        return recomendations;
    }
    public void setRecomendations(String recomendations) {
        this.recomendations = recomendations;
    }

    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    public String getHours() {
        return hours;
    }
    public void setHours(String hours) {
        this.hours = hours;
    }

    public String getEntryPrice() {
        return entryPrice;
    }
    public void setEntryPrice(String entryPrice) {
        this.entryPrice = entryPrice;
    }

    public String getFauna() {
        return fauna;
    }
    public void setFauna(String fauna) {
        this.fauna = fauna;
    }

    public String getFlora() {
        return flora;
    }
    public void setFlora(String flora) {
        this.flora = flora;
    }
    
}