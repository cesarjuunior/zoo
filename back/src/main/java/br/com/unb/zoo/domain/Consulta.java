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
public class Consulta {
    @Id
    @Column(name = "id")
    @GeneratedValue
    private Long id;

    @Column(name = "data")
    private Date data;

    @ManyToOne
    private Funcionarios funcionario;

    @ManyToOne
    private Animais animal;

}
