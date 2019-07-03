package br.com.unb.zoo.interfaces.rest;

import br.com.unb.zoo.domain.Alimento;
import br.com.unb.zoo.repository.AlimentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/alimento"})
public class AlimentoController {

    @Autowired
    private AlimentoRepository repository;

    @GetMapping
    public List findAll(){
        return repository.buscarTodos();
    }

    @GetMapping(path = {"/{id}"})
    public ResponseEntity findById(@PathVariable Long id){
         return ResponseEntity.ok().body(repository.buscarPorId(id));

    }

    @PostMapping
    public Alimento create(@RequestBody Alimento alimento){
        return repository.save(alimento);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity update(@PathVariable("id") Long id, @RequestBody Alimento alimento){
        return repository.findById(id)
                .map(record -> {
                    record.setFornecedor(alimento.getFornecedor());
                    record.setNome(alimento.getNome());
                    Alimento updaded = repository.save(record);
                    return ResponseEntity.ok().body(updaded);
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path ={"/{id}"})
    public ResponseEntity<?> delete(@PathVariable long id) {
        return repository.findById(id)
                .map(record -> {
                    repository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}
