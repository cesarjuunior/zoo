package br.com.unb.zoo.domain;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "ala", schema = "zoo")
public class Ala {

    @Id
    @Column(name = "num_ala")
    private Long numAla;

    @OneToOne
    @JoinColumn(name = "classe")
    private Classe classe;

}
