package br.com.unb.zoo.domain;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "funcionarios", schema = "zoo")
public class Funcionarios {

    @Id
    @Column(name = "matricula")
    private Long matricula;

    @Column(name="nome")
    private String nome;

    @Column(name="escolaridade")
    private String escolaridade;

    @ManyToOne
    @JoinColumn(name = "cargo")
    private Cargo cargo;

    @Column(name="rg")
    private String rg;

    @Column(name="cpf")
    private String cpf;

    @Column(name="crmv")
    private String crmv;

    @ManyToOne
    @JoinColumn(name = "endereco")
    private Endereco endereco;

    @Column(name="data_nascimento")
    private Date dataNascimento;

}
