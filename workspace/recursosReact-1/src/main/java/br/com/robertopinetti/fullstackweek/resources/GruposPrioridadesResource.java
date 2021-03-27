package br.com.robertopinetti.fullstackweek.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.robertopinetti.fullstackweek.domain.GruposPrioridades;
import br.com.robertopinetti.fullstackweek.domain.Pessoa;
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
	
	@PostMapping
	public GruposPrioridades cadastrarGrupo(@RequestBody GruposPrioridades gruposPrioridades) {
		return this.repository.save(gruposPrioridades);
	}	// public GruposPrioridades cadastrarGrupo
	
	@PutMapping("{codigo}")
	public ResponseEntity<GruposPrioridades> atualizarGrupo(@PathVariable("codigo") Long codigo, @RequestBody GruposPrioridades gruposPrioridades) {
		return this.repository.findById(codigo).map(
				record -> {
					record.setNome(gruposPrioridades.getNome());
					record.setDescricao(gruposPrioridades.getDescricao());
					
					GruposPrioridades grupoAtualizado = this.repository.save(record);
					return ResponseEntity.ok().body(grupoAtualizado);
				}
			).orElse(ResponseEntity.notFound().build());
	}	// public ResponseEntity<GruposPrioridades> atualizarGrupo
	
}	// public class GruposPrioridadesResource
