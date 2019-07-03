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
@Table(name = "fornecedores", schema = "zoo")
public class Fornecedores{
    @Id
    @Column(name = "id")
    @GeneratedValue
    private Long id;

    @Column(name = "nome")
    private String nome;

    @ManyToOne
    @JoinColumn(name = "endereco")
    private Endereco endereco;

    @OneToMany(mappedBy = "fornecedor",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Alimento> alimento;

}
