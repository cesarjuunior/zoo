package br.com.unb.zoo.repository;

import br.com.unb.zoo.domain.Alimento;
import br.com.unb.zoo.domain.model.ator.Ator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AlimentoRepository extends JpaRepository<Alimento, Long> {

    @Query(value = "SELECT DISTINCT * from zoo.alimento", nativeQuery = true)
    List<Alimento> buscarTodos();

    @Query(value = "select distinct * from zoo.alimento as a WHERE a.id = :id", nativeQuery = true)
    Alimento buscarPorId(@Param("id") Long id);


}
