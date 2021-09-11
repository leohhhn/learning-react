import { initialize } from 'zokrates-js';

async function startZK(inputs) {
    initialize().then((zokratesProvider) => {

        const shaHash = "db3d852c993dacf6ceeb8eadb1bc7df25d8c5ef5dde18c43a53bbae381a5b96d"

        const source = "";

        // compilation
        const artifacts = zokratesProvider.compile(source);
        //console.log(artifacts.abi)

        const args=[]; // todo get input from frontend


        const {witness, output} = zokratesProvider.computeWitness(artifacts, args);
        console.log(output)

        // run setup
        const keypair = zokratesProvider.setup(artifacts.program);

        // generate proof
        const proof = zokratesProvider.generateProof(artifacts.program, witness, keypair.pk);

        // export solidity verifier
        const verifier = zokratesProvider.exportSolidityVerifier(keypair.vk, "v1");


    }).catch(e=>console.log(e));

}

export default startZK;


