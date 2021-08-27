package com.ecocol.Json;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Place {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    public Long id;
    public String name;
    public Long codeCity;
    public Long hashCodeQR;
    public String codeLocation;
    public String description;
    public String recomendation;
    public String address;
    public String hours;
    public String entryPrice;
    public String fauna;
    public String flora;

    public Place(String name, Long codeCity, Long hashCodeQR, String codeLocation, String description,
            String recomendation, String address, String hours, String entryPrice, String fauna, String flora) {
        this.name = name;
        this.codeCity = codeCity;
        this.hashCodeQR = hashCodeQR;
        this.codeLocation = codeLocation;
        this.description = description;
        this.recomendation = recomendation;
        this.address = address;
        this.hours = hours;
        this.entryPrice = entryPrice;
        this.fauna = fauna;
        this.flora = flora;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getcodeCity() {
        return codeCity;
    }

    public void setcodeCity(Long codeCity) {
        this.codeCity = codeCity;
    }

    public Long gethashCodeQR() {
        return hashCodeQR;
    }

    public void sethashCodeQR(Long hashCodeQR) {
        this.hashCodeQR = hashCodeQR;
    }

    public String getcodeLocation() {
        return codeLocation;
    }

    public void setcodeLocation(String codeLocation) {
        this.codeLocation = codeLocation;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getRecomendation() {
        return recomendation;
    }

    public void setRecomendation(String recomendation) {
        this.recomendation = recomendation;
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

    @Override
    public String toString() {
        return "places{" + "id=" + id + ", codigo=" + codeCity + ", QR=" + hashCodeQR + ", nombre=" + name
                + ", descripción=" + description + ", recomendaciones=" + recomendation + ", dirección=" + address
                + ", horarios=" + hours + ", precio de entrada=" + entryPrice + ", flora=" + flora + ", fauna=" + fauna
                + " }";
    }

}
