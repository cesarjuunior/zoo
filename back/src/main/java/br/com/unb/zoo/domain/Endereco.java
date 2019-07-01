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
public class Endereco {

    @Id
    @Column(name = "id")
    @GeneratedValue
    private Long id;

    @Column(name = "nome")
    private String rua;

    @Column(name = "numero")
    private String numero;

    @Column(name = "bairro")
    private String bairro;

    @Column(name = "cep")
    private String cep;

    @Column(name = "uf")
    private String uf;

    @OneToMany(mappedBy = "endereco")
    @JsonIgnore
    private List<Fornecedores> fornecedores;

    @OneToMany(mappedBy = "endereco")
    @JsonIgnore
    private List<Funcionarios> funcionarios;


}
