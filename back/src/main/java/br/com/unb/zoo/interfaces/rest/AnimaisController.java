package br.com.unb.zoo.interfaces.rest;

import br.com.unb.zoo.domain.Alimento;
import br.com.unb.zoo.domain.Animais;
import br.com.unb.zoo.repository.AnimaisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/animais"})
public class AnimaisController {

    @Autowired
    private AnimaisRepository repository;

    @GetMapping
    public List<Object> findAll(){
        return repository.buscarTodos();
    }

    @GetMapping(path = {"/{id}"})
    public Animais findById(@PathVariable Long id){
        return  repository.buscarUm(id);
    }

    @PostMapping
    public void create(@RequestBody Animais animais){
        List <Animais> animais1 = repository.findAll();
        long id = animais1.size() + 1;
        animais.setId(id);
        repository.salvar(animais.getId(), animais.getNome(), animais.getClasse().getId(), animais.getAlimento().getId(),
                animais.getContainer().getId(), animais.getEspecie(), animais.getAltura(), animais.getPeso(),
                animais.getResponsavel().getMatricula());
    }

    @PutMapping(value = "/{id}")
    public void update(@PathVariable("id") Long id, @RequestBody Animais animais){
        repository.findById(id)
                .map(record -> {
                    record.setAlimento(animais.getAlimento());
                    record.setAltura(animais.getAltura());
                    record.setClasse(animais.getClasse());
                    record.setContainer(animais.getContainer());
                    record.setEspecie(animais.getEspecie());
                    record.setNome(animais.getNome());
                    record.setPeso(animais.getPeso());
                    record.setResponsavel(animais.getResponsavel());
                    repository.alterar(record.getId(),record.getAlimento().getId(), record.getAltura(), record.getClasse().getId(), record.getContainer().getId(),record.getEspecie(), record.getNome(), record.getPeso(), record.getResponsavel().getMatricula());
                    return 0;
                });
    }

    @DeleteMapping(path ={"/{id}"})
    public void delete(@PathVariable long id) {
        repository.exlcuir(id);
    }
}
