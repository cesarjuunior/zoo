package br.com.unb.zoo.interfaces.rest;

import br.com.unb.zoo.domain.Funcionarios;

import br.com.unb.zoo.repository.FuncionariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping({"/funcionarios"})
public class FuncionarioController {

    @Autowired
    private FuncionariosRepository repository;

    @GetMapping
    public List findAll(){
        return repository.findAll();
    }

    @GetMapping(path = {"/{id}"})
    public ResponseEntity findById(@PathVariable Long id){
        return  repository.findById(id)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());

    }

    @PostMapping
    public Funcionarios create(@RequestBody Funcionarios funcionarios){
        return repository.save(funcionarios);
    }

    @PutMapping(value = "/{matricula}")
    public ResponseEntity update(@PathVariable("matricula") Long matricula, @RequestBody Funcionarios funcionarios){
        return repository.findById(matricula)
                .map(record -> {
                    record.setNome(funcionarios.getNome());
                    record.setCargo(funcionarios.getCargo());
                    record.setCpf(funcionarios.getCpf());
                    record.setCrmv(funcionarios.getCrmv());
                    record.setDataNascimento(funcionarios.getDataNascimento());
                    record.setEndereco(funcionarios.getEndereco());
                    record.setEscolaridade(funcionarios.getEscolaridade());
                    record.setRg(funcionarios.getRg());

                    Funcionarios updaded = repository.save(record);
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
