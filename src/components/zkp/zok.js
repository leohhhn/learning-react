import {initialize} from 'zokrates-js';
import {ethers,} from 'ethers';

let zokratesProvider;
let artifacts;

let verifierAbi = '[{"inputs":[{"components":[{"components":[{"internalType":"uint256","name":"X","type":"uint256"},{"internalType":"uint256","name":"Y","type":"uint256"}],"internalType":"struct Pairing.G1Point","name":"a","type":"tuple"},{"components":[{"internalType":"uint256[2]","name":"X","type":"uint256[2]"},{"internalType":"uint256[2]","name":"Y","type":"uint256[2]"}],"internalType":"struct Pairing.G2Point","name":"b","type":"tuple"},{"components":[{"internalType":"uint256","name":"X","type":"uint256"},{"internalType":"uint256","name":"Y","type":"uint256"}],"internalType":"struct Pairing.G1Point","name":"c","type":"tuple"}],"internalType":"struct Verifier.Proof","name":"proof","type":"tuple"},{"internalType":"uint256[1]","name":"input","type":"uint256[1]"}],"name":"verifyTx","outputs":[{"internalType":"bool","name":"r","type":"bool"}],"stateMutability":"view","type":"function"}]';

async function initializeZokratesProvider() {

    zokratesProvider = await initialize();

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

    artifacts = zokratesProvider.compile(source);

}

async function unlockVault(inputs) {

    const witness = zokratesProvider.computeWitness(artifacts, inputs);

    const keypair = zokratesProvider.setup(artifacts.program);
    const proof = zokratesProvider.generateProof(artifacts.program, witness, keypair.pk);

    console.log(proof);

    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    console.log(provider);

    const verifierAdress = '0x1960639786bfCDDe620E61b77bDC24b20ab99973';
    let contract = new ethers.Contract(verifierAdress, verifierAbi, provider);
    console.log(contract);

    let t = await contract.verifyTx(proof.proof, proof.inputs);

    console.log(t);
}


export {initializeZokratesProvider, unlockVault};






