import {initialize} from 'zokrates-js';
import {ethers} from 'ethers';

let zokratesProvider;
let artifacts;

let verifierAbi = '[{"inputs":[{"components":[{"components":[{"internalType":"uint256","name":"X","type":"uint256"},{"internalType":"uint256","name":"Y","type":"uint256"}],"internalType":"struct Pairing.G1Point","name":"a","type":"tuple"},{"components":[{"internalType":"uint256[2]","name":"X","type":"uint256[2]"},{"internalType":"uint256[2]","name":"Y","type":"uint256[2]"}],"internalType":"struct Pairing.G2Point","name":"b","type":"tuple"},{"components":[{"internalType":"uint256","name":"X","type":"uint256"},{"internalType":"uint256","name":"Y","type":"uint256"}],"internalType":"struct Pairing.G1Point","name":"c","type":"tuple"}],"internalType":"struct Verifier.Proof","name":"proof","type":"tuple"},{"internalType":"uint256[1]","name":"input","type":"uint256[1]"}],"name":"verifyTx","outputs":[{"internalType":"bool","name":"r","type":"bool"}],"stateMutability":"view","type":"function"}]';

let verifierABIroot ="[\n" +
    "\t{\n" +
    "\t\t\"inputs\": [\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"components\": [\n" +
    "\t\t\t\t\t{\n" +
    "\t\t\t\t\t\t\"components\": [\n" +
    "\t\t\t\t\t\t\t{\n" +
    "\t\t\t\t\t\t\t\t\"internalType\": \"uint256\",\n" +
    "\t\t\t\t\t\t\t\t\"name\": \"X\",\n" +
    "\t\t\t\t\t\t\t\t\"type\": \"uint256\"\n" +
    "\t\t\t\t\t\t\t},\n" +
    "\t\t\t\t\t\t\t{\n" +
    "\t\t\t\t\t\t\t\t\"internalType\": \"uint256\",\n" +
    "\t\t\t\t\t\t\t\t\"name\": \"Y\",\n" +
    "\t\t\t\t\t\t\t\t\"type\": \"uint256\"\n" +
    "\t\t\t\t\t\t\t}\n" +
    "\t\t\t\t\t\t],\n" +
    "\t\t\t\t\t\t\"internalType\": \"struct Pairing.G1Point\",\n" +
    "\t\t\t\t\t\t\"name\": \"a\",\n" +
    "\t\t\t\t\t\t\"type\": \"tuple\"\n" +
    "\t\t\t\t\t},\n" +
    "\t\t\t\t\t{\n" +
    "\t\t\t\t\t\t\"components\": [\n" +
    "\t\t\t\t\t\t\t{\n" +
    "\t\t\t\t\t\t\t\t\"internalType\": \"uint256[2]\",\n" +
    "\t\t\t\t\t\t\t\t\"name\": \"X\",\n" +
    "\t\t\t\t\t\t\t\t\"type\": \"uint256[2]\"\n" +
    "\t\t\t\t\t\t\t},\n" +
    "\t\t\t\t\t\t\t{\n" +
    "\t\t\t\t\t\t\t\t\"internalType\": \"uint256[2]\",\n" +
    "\t\t\t\t\t\t\t\t\"name\": \"Y\",\n" +
    "\t\t\t\t\t\t\t\t\"type\": \"uint256[2]\"\n" +
    "\t\t\t\t\t\t\t}\n" +
    "\t\t\t\t\t\t],\n" +
    "\t\t\t\t\t\t\"internalType\": \"struct Pairing.G2Point\",\n" +
    "\t\t\t\t\t\t\"name\": \"b\",\n" +
    "\t\t\t\t\t\t\"type\": \"tuple\"\n" +
    "\t\t\t\t\t},\n" +
    "\t\t\t\t\t{\n" +
    "\t\t\t\t\t\t\"components\": [\n" +
    "\t\t\t\t\t\t\t{\n" +
    "\t\t\t\t\t\t\t\t\"internalType\": \"uint256\",\n" +
    "\t\t\t\t\t\t\t\t\"name\": \"X\",\n" +
    "\t\t\t\t\t\t\t\t\"type\": \"uint256\"\n" +
    "\t\t\t\t\t\t\t},\n" +
    "\t\t\t\t\t\t\t{\n" +
    "\t\t\t\t\t\t\t\t\"internalType\": \"uint256\",\n" +
    "\t\t\t\t\t\t\t\t\"name\": \"Y\",\n" +
    "\t\t\t\t\t\t\t\t\"type\": \"uint256\"\n" +
    "\t\t\t\t\t\t\t}\n" +
    "\t\t\t\t\t\t],\n" +
    "\t\t\t\t\t\t\"internalType\": \"struct Pairing.G1Point\",\n" +
    "\t\t\t\t\t\t\"name\": \"c\",\n" +
    "\t\t\t\t\t\t\"type\": \"tuple\"\n" +
    "\t\t\t\t\t}\n" +
    "\t\t\t\t],\n" +
    "\t\t\t\t\"internalType\": \"struct Verifier.Proof\",\n" +
    "\t\t\t\t\"name\": \"proof\",\n" +
    "\t\t\t\t\"type\": \"tuple\"\n" +
    "\t\t\t},\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"internalType\": \"uint256[2]\",\n" +
    "\t\t\t\t\"name\": \"input\",\n" +
    "\t\t\t\t\"type\": \"uint256[2]\"\n" +
    "\t\t\t}\n" +
    "\t\t],\n" +
    "\t\t\"name\": \"verifyTx\",\n" +
    "\t\t\"outputs\": [\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"internalType\": \"bool\",\n" +
    "\t\t\t\t\"name\": \"r\",\n" +
    "\t\t\t\t\"type\": \"bool\"\n" +
    "\t\t\t}\n" +
    "\t\t],\n" +
    "\t\t\"stateMutability\": \"view\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t}\n" +
    "]";

async function initializeZokratesProvider() {

    zokratesProvider = await initialize();

    // const source = "import \"hashes/sha256/512bitPacked\" as sha256packed\n" +
    //     "\n" +
    //     "def main(private field x0, private field y0, private field x1, private field y1, private field x2, private field y2, private field x3, private field y3) -> bool:\n" +
    //     "\n" +
    //     "    field f_0 = y0 * ((x1 / (x1 - x0)) * (x2 / (x2 - x0)) * (x3 / (x3 - x0))) +\\\n" +
    //     "                y1 * ((x0 / (x0 - x1)) * (x2 / (x2 - x1)) * (x3 / (x3 - x1))) +\\\n" +
    //     "                y2 * ((x1 / (x1 - x2)) * (x0 / (x0 - x2)) * (x3 / (x3 - x2))) +\\\n" +
    //     "                y3 * ((x1 / (x1 - x3)) * (x2 / (x2 - x3)) * (x0 / (x0 - x3)))\n" +
    //     "                  \n" +
    //     "    field[2] t = sha256packed([0, 0, 0, f_0])\n" +
    //     "        \n" +
    //     "    return (t[0] == 82813544787644065989771223340885025079 && t[1] == 180796112148717072687895248956071692603)";

    const source =
        "def main(private field a, field b) -> bool: return a * a == b";

    artifacts = zokratesProvider.compile(source);
}

async function unlockVault(inputs) {

    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time);

    //let lol = ["1", "1028377", "2", "1028592", "3", "1029155", "4", "1030234"];
    inputs = ["3", "9"];

    const {witness, output} = zokratesProvider.computeWitness(artifacts, ["3", "9"]);
    console.log(witness)

    const keypair = zokratesProvider.setup(artifacts.program);
    console.log(keypair)
    const proof = zokratesProvider.generateProof(artifacts.program, witness, keypair.pk);

    console.log(proof);
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

    // 0xE365c7db3E5979A0daa2900ec15E53F493b5cea3 a*a==b contract

    const verifierAdress = '0x1960639786bfCDDe620E61b77bDC24b20ab99973';

    let contract = new ethers.Contract("0xe365c7db3e5979a0daa2900ec15e53f493b5cea3", verifierABIroot, provider);
    console.log(contract)

    let t = await contract.verifyTx(proof.proof, proof.inputs);
    console.log(t)
}


export {initializeZokratesProvider, unlockVault};






