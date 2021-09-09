import { initialize } from 'zokrates-js';

async function startZK() {
    initialize().then((zokratesProvider) => {
        const source = "def main(private field x1, private field y1, private field x2, private field y2, private field x3, private field y3, private field x0, private field y0, field s) -> bool: field f_0 = y0 * ((x1 / (x1 - x0)) * (x2 / (x2 - x0)) * (x3 / (x3 - x0))) +\\ y1 * ((x0 / (x0 - x1)) * (x2 / (x2 - x1)) * (x3 / (x3 - x1))) +\\ y2 * ((x1 / (x1 - x2)) * (x0 / (x0 - x2)) * (x3 / (x3 - x2))) +\\ y3 * ((x1 / (x1 - x3)) * (x2 / (x2 - x3)) * (x0 / (x0 - x3))) return f_0 == s";

        // compilation
        const artifacts = zokratesProvider.compile(source);

        // computation
        const {witness, output} = zokratesProvider.computeWitness(artifacts, ["2"]);

        // run setup
        const keypair = zokratesProvider.setup(artifacts.program);

        // generate proof
        const proof = zokratesProvider.generateProof(artifacts.program, witness, keypair.pk);

        // export solidity verifier
        const verifier = zokratesProvider.exportSolidityVerifier(keypair.vk, "v1");
    });

}

export default startZK;


