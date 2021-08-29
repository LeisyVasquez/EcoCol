package com.ecocol.Json;


public class ListPlace {

    public NodoPlace head = null;
    public int size = 0;

    public void addPlace(Place value) {
        NodoPlace newNodo = new NodoPlace(value);
        if (head == null) {
            head = newNodo;
        } else {
            NodoPlace pointer = head;
            while (pointer.next != null) {
                pointer = pointer.next;
            }
            pointer.next = newNodo;
        }
        size++;
    }

    // Mostrar todos los lugares de la lista
    public void showPlaces() {
        if (head == null)
            System.out.println("No hay lugares para visualizar");
        else {
            NodoPlace pointer = head;
            while (pointer != null) {
                String response = pointer.value.toStringL();
                System.out.println(response);
                pointer = pointer.next;
            }
        }
    }

    public void searchPlace(String lugar) {
        if (head == null)
            System.out.println("No hay lugares para buscar");
        NodoPlace pointer = head;
        while (pointer != null) {
            if (pointer.value.name.equals(lugar)) {
                String response = pointer.value.toString();
                System.out.println(response);
                return; 
            }
            pointer = pointer.next;
        }
        System.out.println("El lugar no existe");
    }



    // Eliminar un lugar por el nombre
    public void deletePlace(String namePlace) {
        if (head == null)
            System.out.println("No hay lugares para eliminar");
        else if (head.next == null)
            head = null;
        else if (head.value.name.equals(namePlace))
            head = head.next;
        else {
            NodoPlace pointer = head;
            while (pointer.next != null) {
                if (pointer.next.value.name.equals(namePlace)) {
                    pointer.next = pointer.next.next;
                    return;
                }
                pointer = pointer.next;
            }
        }
    }

    public char[] addPlace(String name, String ubication_city, String codeCity, String hashCodeQR, String codeLocation,
            String description, String recomendation, String address, String hours, String entryPrice, String fauna,
            String flora) {
        return null;
    }


}
