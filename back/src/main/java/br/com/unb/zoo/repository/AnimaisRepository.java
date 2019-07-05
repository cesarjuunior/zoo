package br.com.unb.zoo.repository;

import br.com.unb.zoo.domain.Alimento;
import br.com.unb.zoo.domain.Animais;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface AnimaisRepository extends JpaRepository<Animais, Long> {


    @Query(value = "select a.nome, a.especie, a.altura, a.peso, al.nome as alimentoNome, c.tipo, cl.nome_da_classe, r.nome as responsavelNome from zoo.animais as a " +
            "join zoo.alimento as al on a.alimento = al.id " +
            "join zoo.container as c on a.container = c.id " +
            "join zoo.classe as cl on a.classe = cl.id " +
            "join zoo.funcionarios as r on a.responsavel = r.matricula;", nativeQuery = true)
    List<Object> buscarTodos();

    @Query(value = "SELECT * from zoo.animais as a WHERE a.id = :id", nativeQuery = true)
    Animais buscarUm(@Param("id") Long id);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO zoo.animais " +
            "(id, nome, classe, alimento, container, especie, altura, peso, responsavel) " +
            "VALUES(:id, :nome, :classe ,:alimento, :container, :especie, :altura, :peso, :responsavel);", nativeQuery = true)
    void salvar(@Param("id") Long id, @Param("nome") String nome, @Param("classe") Long classe,@Param("alimento") Long alimento,
                @Param("container") Long container, @Param("especie") String especie, @Param("altura") String altura,
                @Param("peso") String peso, @Param("responsavel") Long responsavel);

    @Modifying
    @Transactional
    @Query(value = "UPDATE zoo.animais " +
            "SET nome=:nome, classe=:classe, alimento=:alimento, container=:container, especie=:especie, altura=:altura, peso=:peso, responsavel=:matricula " +
            "WHERE id= :id", nativeQuery = true)
    void alterar(@Param("id") Long id,@Param("alimento") Long alimento,@Param("altura") String altura,@Param("classe") Long classe,@Param("container") Long container,
                 @Param("especie") String especie,@Param("nome") String nome,@Param("peso") String peso,@Param("matricula") Long matricula);

    @Modifying
    @Transactional
    @Query(value = "delete from zoo.animais where id =:id", nativeQuery = true)
    void exlcuir(@Param("id") long id);
}
