package br.com.unb.zoo.repository;

import br.com.unb.zoo.domain.Limpeza;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LimpezaRepository extends JpaRepository<Limpeza, Long> {


}
