package br.com.unb.zoo.repository;

import br.com.unb.zoo.domain.Animais;
import br.com.unb.zoo.domain.model.ator.Ator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnimaisRepository extends JpaRepository<Animais, Long> {
}