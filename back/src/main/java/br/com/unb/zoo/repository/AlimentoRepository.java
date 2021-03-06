package br.com.unb.zoo.repository;

import br.com.unb.zoo.domain.Alimento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface AlimentoRepository extends JpaRepository<Alimento, Long> {

    @Query(value = "SELECT DISTINCT * from zoo.alimento", nativeQuery = true)
    List<Alimento> buscarTodos();

    @Query(value = "select distinct * from zoo.alimento as a WHERE a.id = :id", nativeQuery = true)
    Alimento buscarPorId(@Param("id") Long id);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO zoo.alimento(id, nome, fornecedor) VALUES(:id, :nome, :idFornecedor) ", nativeQuery = true)
    void salvar(@Param("id") Long id, @Param("idFornecedor") Long idFornecedor, @Param("nome") String nome);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM zoo.alimento WHERE id = :id", nativeQuery = true)
    void excluir(@Param("id") Long id);

    @Modifying
    @Transactional
    @Query(value = "UPDATE zoo.alimento SET nome = :nome, fornecedor = :idFornecedor WHERE id = :id", nativeQuery = true)
    void alterar(@Param("id") Long id, @Param("nome") String nome, @Param("idFornecedor") Long idFornecedor);
}
