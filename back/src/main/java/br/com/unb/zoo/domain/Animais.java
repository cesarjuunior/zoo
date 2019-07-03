package br.com.unb.zoo.domain;

import lombok.*;

import javax.persistence.*;
import java.sql.Blob;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "animais", schema = "zoo")
public class Animais {

    @Id
    @Column(name = "id")
    @GeneratedValue
    private Long id;

    @Column(name="nome")
    private String nome;

    @ManyToOne
    @JoinColumn(name="classe")
    private Classe classe;

    @ManyToOne
    @JoinColumn(name = "alimento")
    private Alimento alimento;

    @ManyToOne
    @JoinColumn(name = "container")
    private Container container;

    @Column(name="especie")
    private String especie;

    @Column(name="altura")
    private String altura;

    @Column(name="peso")
    private String peso;

    @ManyToOne
    @JoinColumn(name = "responsavel")
    private Funcionarios responsavel;

    @Column(name = "foto_animal")
    private Byte[] fotoAnimal;
}
