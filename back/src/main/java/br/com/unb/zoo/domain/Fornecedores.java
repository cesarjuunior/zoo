package br.com.unb.zoo.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Fornecedores{
    @Id
    @Column(name = "id")
    @GeneratedValue
    private Long id;

    @Column(name = "nome")
    private String nome;

    @ManyToOne
    private Endereco endereco;

    @OneToMany(mappedBy = "fornecedor",cascade = CascadeType.ALL)
    private List<Alimento> alimento;

}
