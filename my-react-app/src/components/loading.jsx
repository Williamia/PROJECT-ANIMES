import React from "react";
import './css/loading.css'

export default function Loading(){
    return (
        <div className="loading">
          <h2>Carregando...</h2>
          {/* Aqui você pode adicionar qualquer tipo de animação ou ícone de carregamento */}
          <div className="spinner"></div>
        </div>
      );
}