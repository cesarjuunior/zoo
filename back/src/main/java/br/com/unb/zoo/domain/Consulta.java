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
@Table(name = "consulta", schema = "zoo")
public class Consulta {
    @Id
    @Column(name = "id")
    @GeneratedValue
    private Long id;

    @Column(name = "data")
    private Date data;

    @ManyToOne
    @JoinColumn(name = "funcionario")
    private Funcionarios funcionario;

    @ManyToOne
    @JoinColumn(name = "animal")
    private Animais animal;

}
