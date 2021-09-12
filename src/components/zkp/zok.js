import {initialize} from 'zokrates-js';

let zokratesProvider;
let artifacts;

async function initializeZokratesProvider() {

    console.log("gonna load ZKP now")
    initialize().then((zkp) => {
        zokratesProvider = zkp;

        const source = "import \"hashes/sha256/512bitPacked\" as sha256packed\n" +
            "\n" +
            "def main(private field x0, private field y0, private field x1, private field y1, private field x2, private field y2, private field x3, private field y3) -> bool:\n" +
            "\n" +
            "    field f_0 = y0 * ((x1 / (x1 - x0)) * (x2 / (x2 - x0)) * (x3 / (x3 - x0))) +\\\n" +
            "                y1 * ((x0 / (x0 - x1)) * (x2 / (x2 - x1)) * (x3 / (x3 - x1))) +\\\n" +
            "                y2 * ((x1 / (x1 - x2)) * (x0 / (x0 - x2)) * (x3 / (x3 - x2))) +\\\n" +
            "                y3 * ((x1 / (x1 - x3)) * (x2 / (x2 - x3)) * (x0 / (x0 - x3)))\n" +
            "                  \n" +
            "    field[2] t = sha256packed([0, 0, 0, f_0])\n" +
            "        \n" +
            "    return (t[0] == 82813544787644065989771223340885025079 && t[1] == 180796112148717072687895248956071692603)\n" +
            "\n";

        // compilation
        artifacts = zokratesProvider.compile(source);
        //console.log(artifacts.abi);

        console.log("loaded ZKP!!!")
    }).catch(e => {
        console.log(e);
    });
}

async function unlockVault(inputs) {

    const args = ["1", "1028377", "4", "1030234", "6", "1034612", "7", "1038247"]; // todo get input from frontend

    //const {witness, output} = zokratesProvider.computeWitness(artifacts, args);
    //console.log(output)

    // // run setup
    // const keypair = zokratesProvider.setup(artifacts.program);
    //
    // // generate proof
    // const proof = zokratesProvider.generateProof(artifacts.program, witness, keypair.pk);
    //
    // // export solidity verifier
    // const verifier = zokratesProvider.exportSolidityVerifier(keypair.vk, "v1");


}

export {initializeZokratesProvider, unlockVault};






