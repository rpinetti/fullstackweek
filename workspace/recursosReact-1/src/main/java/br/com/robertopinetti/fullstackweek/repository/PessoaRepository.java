package br.com.robertopinetti.fullstackweek.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.robertopinetti.fullstackweek.domain.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {

}
