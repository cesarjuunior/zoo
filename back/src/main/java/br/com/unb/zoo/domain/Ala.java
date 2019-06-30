package br.com.unb.zoo.domain;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Ala {

    @Id
    @Column(name = "num_ala")
    private Long numAla;

    @OneToOne
    private Classe classe;

}
