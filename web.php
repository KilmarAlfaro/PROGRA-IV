<?php

use Illuminate\Support\Facades\Route;

Route::get("/", function () {
    return view("home");
    });

// puede ser distinto nombre
Route::get("/info", function () {
    return view("info");})->name("informacion");

Route::post("/datos",function () {
    return "Haz hecho post aqui";
    });