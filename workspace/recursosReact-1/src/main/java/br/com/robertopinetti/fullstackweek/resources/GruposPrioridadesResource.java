package br.com.robertopinetti.fullstackweek.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.robertopinetti.fullstackweek.domain.GruposPrioridades;
import br.com.robertopinetti.fullstackweek.repository.GruposPrioridadesRepository;

@RestController
@RequestMapping("/grupos")
public class GruposPrioridadesResource {

	@Autowired
	private GruposPrioridadesRepository repository;
	
	@GetMapping
	public List<GruposPrioridades> listarTodos() {
		return this.repository.findAll();
	}	// public List<GruposPrioridades> listarTodos
	
	@GetMapping("{codigo}")
	public GruposPrioridades buscarGrupoPrioridade(@PathVariable("codigo") Long codigo) {
		return this.repository.findById(codigo).orElse(null);
	}	// public GruposPrioridades buscarGrupoPrioridade
	
}	// public class GruposPrioridadesResource
