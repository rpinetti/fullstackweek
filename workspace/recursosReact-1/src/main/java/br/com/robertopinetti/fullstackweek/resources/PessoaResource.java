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

import br.com.robertopinetti.fullstackweek.domain.Pessoa;
import br.com.robertopinetti.fullstackweek.repository.PessoaRepository;

@RestController
@RequestMapping("/pessoas")
public class PessoaResource {
	
	@Autowired
	private PessoaRepository repository;
	
	@GetMapping
	public List<Pessoa> listarTodos() {
		return this.repository.findAll();
	}	// public List<Pessoa> listarTodos()
	
	@PostMapping
	public Pessoa cadastrarPessoa(@RequestBody Pessoa pessoa) {
		return this.repository.save(pessoa);
	}	// public Pessoa cadastrarPessoa
	
	@PutMapping("{codigo}")
	public ResponseEntity<Pessoa> atualizarPessoa(@PathVariable("codigo") Long codigo, @RequestBody Pessoa pessoa) {
		return this.repository.findById(codigo).map(
					record -> {
						record.setCpf(pessoa.getCpf());
						record.setDataNascimento(pessoa.getDataNascimento());
						record.setEmail(pessoa.getEmail());
						record.setIdade(pessoa.getIdade());
						record.setNome(pessoa.getNome());
						record.setTelefone(pessoa.getTelefone());
						
						Pessoa pessoaAutalizada = this.repository.save(record);
						return ResponseEntity.ok().body(pessoaAutalizada);
					}
				).orElse(ResponseEntity.notFound().build());
	}	// public ResponseEntity<Pessoa> atualizarPessoa
	
	@GetMapping("{codigo}")
	public Pessoa buscarPessoa(@PathVariable("codigo") Long codigo) {
		return this.repository.findById(codigo).orElse(null);
	}	// public Pessoa buscarPessoa
	
}	// public class PessoaResource
