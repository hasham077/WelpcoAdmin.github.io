'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "405b62b9222468fda20fe1b9bb96f724",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9fd2582c7adc860a55031a07dda482d8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a38e4fbe3bdbef638efa60cf086174af",
".git/logs/refs/heads/main": "64b6b50362729b6da3694f5c2d836572",
".git/logs/refs/remotes/origin/main": "4abda83bf90bedad776b4f2081247bcc",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/87c22330c5c2ed311001cdfae64af5d0652610": "03b47aabb2a95c0b0f156ca87b22123f",
".git/objects/15/abe5d076bf67f27992e637484cecca2e3857c8": "bd5b11b3840b5a6af5be8abecbcb05ee",
".git/objects/16/4ae9b1bfde30540abc32dcb01b0192d30685dc": "cf90462a7d7f02294f16078ea9a7a38c",
".git/objects/17/592bb95d143293373351cd7c1f9ae4b6a9f017": "c7c01f60553d1f6a8a5f7df8ebde74e8",
".git/objects/17/82663b34a1e7be64165b8abe22a8bc11b8ae89": "d2dbcaf9290289240127624b87f64782",
".git/objects/18/0e406e688a8196618479422f63dc33cad2c935": "5409c09424d3df878e3d757cbdc8e2be",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/7518cae28a78b5198ef70d64292d2687a79817": "a456723953cd74b3df99b0ddbaa67c97",
".git/objects/19/772909bd3c76fe0c0d7f5f7ae71b091241dfa2": "e3567f80e1fe690e8f743f2b30daf6b5",
".git/objects/1e/04a88c5329327a8000a77461f3430e409ade79": "cc14c9271e176bb87132f020dd8a5357",
".git/objects/1e/58066f4a1de5084ce84fafadf1ed85c73d82de": "0f08f912d82df5f109e0154708d16e0c",
".git/objects/1e/77059b3286e321aec17fbedc1eee2e6d223342": "5f4a093ab24d7e979927e4de8c62a7d7",
".git/objects/1e/d69940061ab79a3e42d4c9a3ba72de9a687bc9": "fe2bb5e2133994296ce87b35187c58fb",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/540d33eeac827df3f7a559eda84a5e8c0a8a4c": "f2c4cfcf10b2e1438992bec0a76eca05",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/5db16ac591b5b5e027a3a7ab1f068211679df7": "7c6bcf9fdd1b38b70fc19d8018773afd",
".git/objects/21/a63bdee2eeec65e5a7e0f570955ff0954639f9": "ce4b2080fa48061961fa4aca43c8f49f",
".git/objects/21/c7050472f69e4ff526e76ba99302b555bb4dcd": "40084a883b6e24b323326372460e069e",
".git/objects/22/f3597156042ae583010263e1b95e4f266da017": "0e450a3bd98d6303ee3975c13ca2f9da",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/31c2ce4a094ce7754faa7115f8c0a19cf345c9": "b97e5be95fc63ac131ee0b62f0d8e380",
".git/objects/2c/f027b61031eee37493786225e03fdd7b3f66fd": "7c092f2c7b739254b067e875b59df81e",
".git/objects/2f/62b7e0a986f8561c8503854326595b50bf4b0f": "40fc795245593ef964c07e48feb08023",
".git/objects/34/94eabf2a75becfe2fbf6db2db87b273b6e62cb": "ef70c038361be0bf26d151ab001df575",
".git/objects/38/6d3a6dacedacb3fb68ecf65acce0f301685363": "3102fd220f42567eeadd91d11b72f567",
".git/objects/38/fabb3f783018b63a1daf7d1b27bf494b468fef": "e7752c81ec013dd09ddb9fbe3ea6a8a7",
".git/objects/3a/4994a635e1b75c6ff47a091046308af0fd2964": "ee9dde73ccf82d34fcd4aa9617c8f294",
".git/objects/3c/5c11cc65daca11700da0d78f149ae8326d5050": "5d6e4fdb13a3690f1605b9f69c088416",
".git/objects/3d/8b9cab90d9de3cd6134ba81d1c91ff9c751eb3": "8bde7d424c75ad661864516df46087a3",
".git/objects/3e/13ada7403f3a6844b5095047663779346cc9b4": "0189193dc3a94da340eb95ad5a212d24",
".git/objects/47/5d7b0eb8fb4a7cab48cb26ffc7fd67f0914198": "b424f93629cb1f0f212287b1bb8afe68",
".git/objects/49/817ef98eb281512ab6d70f3a0071fa3555b41a": "9aeb9d404913118cb3548157ee561428",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4c/c678a6ba5e1f8bb2af6eadc7d0e920595f02a4": "fa074098bdf40608aefd24b1934bc28e",
".git/objects/54/019d71f375281a75c52b35166bfe73db4fe712": "e4cb4eebe3f8b05a36050462ce40cb10",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5d/7c1d996c54711b48e17504de3c2d74ddc15333": "72077ee48157b04d7167a898332ec1a1",
".git/objects/60/eb15fc711c160438f9959b0df32ef78eed7d0e": "7b017a87d831a2d56f069573bbd34e0d",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/7c5f6973ca6bc07159c2642b0ab3a90cdead2a": "e272906cfd68350ba817816de85e2ef1",
".git/objects/64/464707609b96afdeed116e48e9aba151045a6d": "9d9efeeb4849a331720b74eed4a8bc25",
".git/objects/66/ad6df59079ba5168fb7b48167ffa10dc26168b": "a8c22a90b675b3167497b16be6ea1c3f",
".git/objects/67/83353ede821e45a460e80252cea0c0106a7f3a": "057c513122980fe17540620866a914ba",
".git/objects/69/fd707ffd7ac8d0f52664a60749b0f4236bf7c8": "cced7bd2e19a8995ca1ed787477a79a4",
".git/objects/6a/a668633dda5d9dcb0f73f06c1e342d9a3ad659": "371726a6c0367f9d9ba784274812a344",
".git/objects/6e/ebad9f78c52e05164e6ec33b983102864730ff": "1b11cc34480ae6065eb1e3993f53c8bf",
".git/objects/70/d3cec35e5b4cbdec3372724b630096a6629627": "c1c7f2225dbef6edd2e1e1f73190cde5",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/38bc25bf7f70ac21f7f7c14466ac352a1af036": "383a43380d9e929278febe4568244a3e",
".git/objects/76/dd934eeb11731d3bd1d45a8cb5c9342c966367": "2ea2a2321de75cfd06170c10d9d922cf",
".git/objects/7b/7d44576d0dd1a04874d68bbc2cc638dfb0a8fa": "0cacc92d6ea459f578258d47a0dfdb55",
".git/objects/7d/b74bf4afe3f24e3d718cb9fb03b673e0836142": "2ea92ded368ad5427b7e93db458ff39c",
".git/objects/83/99e9831e4060856f6699e449eab6e9559547b9": "fb4a6a865441577abc2243b84bc070dc",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/477bfecbde5cea3ac8324409928b59329c2278": "75a4b4585c90a280eb1033d39b896178",
".git/objects/91/ee338a7ceb331eb0e0bcf1d4ae4997327b37cc": "a4e0b9c0f1d32fe9edce213604b47510",
".git/objects/94/d749219ccde0659522b151eee58d64bd33d4d0": "438fd9ca175bcc625e79ee2236b9eae0",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/67e0a20120fdc25d905edc1eeefd42b87e09b1": "ead2e9720f8b0b6880cd00e3168b3045",
".git/objects/98/7977c3ae41b227ed148953c78230dd40bf7fba": "b73df40c8dbfdaf5421e21b13dc69842",
".git/objects/9b/206d934f2b459536e1345a54cf7ae6d4a07f91": "afae488e86975a1732a8529af21b6e55",
".git/objects/a0/3f1228b1bbbece26a85dca53bf1dc1d9dbac11": "ca3393d57ec6222994d77da448479071",
".git/objects/a1/04bdd30000578f25fa970ab3cb4f6d24891c84": "a53d90fa7cf004ab59d82fbe04cce3bf",
".git/objects/a1/bf6bdc5ed75e5886a46fe97fae0e2433e56546": "c01d26578444378f385465edca4df418",
".git/objects/a4/61cb2584920a075e83715e4baa5fbb4d0b7e46": "312df0af486399b65194a5311d17558f",
".git/objects/a6/7cafd187835163a9beaedfd5e7672b044500e7": "9e628646f658e513551a7c44c6ae07bd",
".git/objects/a9/de6dcfe36a819bee8a0c5c8a6a270010389d6f": "0743e4472067c75a47caa024c6700918",
".git/objects/ad/a82c462e9a4f392c86cddbf12199d3219e577e": "9b0bd7346be8a2c62a609e1004a11f28",
".git/objects/b2/d251b5cba25921212e73801da50f7b79509085": "24b787c4857bf7b610454ff7cabda628",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b6/1e5ac459d9bbcbc1743ffaa2e3bcffef56df82": "26cc248a426b041acde0d5ef9c49193a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/43929a8f5a8d53cae78d52f4a31b4b23567441": "f3afe8079754fb5f91b7f229e8506e39",
".git/objects/bd/dcd1a32a3034886ac2b75c6c091153bbf0f5e2": "41225ed8826d981b5700d76b3e4f03eb",
".git/objects/c3/72af8998f4d474ef02e39400cb2952708a65b8": "6a6d753248aefd656665de4be7113ce5",
".git/objects/c3/8f7559a5301cfd4729b0212d4286d5d3321f9e": "8b85d37f08733e873d7446ead85416c5",
".git/objects/c6/05a2be3126abb2adbbc1a6a828f0c35e636b43": "17209e87f424dbdfee34c4ddda6204c5",
".git/objects/c9/085c60a4f2de94aaabd9d52bbecc87d99b21c8": "0d7c9650489c1203a1c0f0187256079e",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/350a6be7a516af3882bb9e65023d3bc2056baf": "d8a5c3cacf9291fd3eeff3007cf47ab0",
".git/objects/ce/2101951429f5623071f3029752f09a169e4e74": "8c29202e69bf83c429e0f64f7c8a0c38",
".git/objects/ce/462a4455393cf5ada300da10ee7dc4d8f1b0e6": "2df9f1f5ba1e9c1fef830634175e5bab",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/37575f4235b2a060abd5010dc16f6fe92608d1": "1666912c4af771fa8e57b290bae80974",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/3636af83d7f45b00cf5e20b123dba184884a73": "412decdd788f3147f587bdcdcdfba636",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d28b3a468f93d169c93b701ac27b40afd560c9": "721555a59c745465a803a64393c06053",
".git/objects/d9/3f1b609d0bd7b595269c87b5bfd09e8c019df9": "0a0af79c7088d22bedcd7b2a487fc48a",
".git/objects/dc/955cf57138aab475746d946c2751941ced9b42": "27858ee5604f031f5a7b32df4b745e99",
".git/objects/de/d4b822a9587ee6f66e4cc0c6025083e0362b12": "f6dc2cde1496f4b17b66912e587922d4",
".git/objects/e4/c928d854fe7ce21557cbf0407845a1765f4348": "eb8a45edf27a948ea5ab968e09c34c04",
".git/objects/e6/6ef66bb61f4bcc7c9cb050200a373e098b4fae": "4ccca03348e8c73d581fb30bc7df964c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/6198a840ccf7bb71577643b3af2c4b353dc43f": "f26a1f5373a23e2376e8a659f9cea296",
".git/objects/ee/10586618923df0db7aebd3d7615edb8a0f97c8": "5db884f93a2066060a91d0ac991d4f59",
".git/objects/ee/12a1d0828bff69a6d7e118e7a3ff3756d4d1b6": "76592a8562f2635f9e9b6ffcbc5e8518",
".git/objects/ee/8cdf1bbdc14ca58c5fbf30d8df990a91360417": "14f46a43c857a8f3228967a7d2aea4ac",
".git/objects/ee/e380a34aa889925fc5b132ee69b4718c4e5611": "c8623e2cc9e6681e9e5ab600f01e6fa9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/refs/heads/main": "4228370bc40d06c5b47e91723eb8db49",
".git/refs/remotes/origin/main": "4228370bc40d06c5b47e91723eb8db49",
"assets/AssetManifest.bin": "3f58dec2a6856fc51d63ccd8e20d9eb0",
"assets/AssetManifest.bin.json": "04e0b0afeab5e0ee6186517d9a7d995d",
"assets/AssetManifest.json": "3b5e943bb88b0d9706a5df1c9eb80dca",
"assets/assets/fonts/PlusJakartaSans-Bold.ttf": "7dae244963714ee2b16fcbab46661792",
"assets/assets/fonts/PlusJakartaSans-BoldItalic.ttf": "fdbe93c588403b5c67963757775c98cb",
"assets/assets/fonts/PlusJakartaSans-ExtraBold.ttf": "9bfdb6bb1fda2806463b64e44c5eaed9",
"assets/assets/fonts/PlusJakartaSans-ExtraBoldItalic.ttf": "ba442a7aab453d20c5709ae7ca0837ac",
"assets/assets/fonts/PlusJakartaSans-ExtraLight.ttf": "bd1c3b0ba032000f9e62c171bd0558eb",
"assets/assets/fonts/PlusJakartaSans-ExtraLightItalic.ttf": "4a090ca0e9382ed4996f23042b335391",
"assets/assets/fonts/PlusJakartaSans-Italic.ttf": "5d157c8d8e47cc6e2da60b8158e78ca8",
"assets/assets/fonts/PlusJakartaSans-Light.ttf": "d6fb190614a9297c6263f85094463592",
"assets/assets/fonts/PlusJakartaSans-LightItalic.ttf": "0bf00206fd7547022cfa3e0ec073e427",
"assets/assets/fonts/PlusJakartaSans-Medium.ttf": "9fb6d71fc9edf9db455adeb04da9795c",
"assets/assets/fonts/PlusJakartaSans-MediumItalic.ttf": "6efa621b283ff999f05bc4d672de8c95",
"assets/assets/fonts/PlusJakartaSans-Regular.ttf": "f539ae4a8884822210a4553cc88ca3dc",
"assets/assets/fonts/PlusJakartaSans-SemiBold.ttf": "08d59825aa09f741c9272b85e6a1adbf",
"assets/assets/fonts/PlusJakartaSans-SemiBoldItalic.ttf": "9f3904d1769f5e804c644e59c203f447",
"assets/assets/imgs/appNameImg.png": "4e85a42f8fc6ae2cfd5210289126efb9",
"assets/assets/imgs/englishLangImg.png": "d024d7cf16e7c48130f0e799a279560f",
"assets/assets/imgs/loadingImg.png": "96b7a6a030e9e575c700ef9695aa32c2",
"assets/assets/imgs/onboarding1Img.png": "b493df44e145f91e9d1b29b4b4132613",
"assets/assets/imgs/onboarding2Img.png": "dcad9f3e04e20dbc2b69ccbac1c1e03a",
"assets/assets/imgs/onboarding3Img.png": "69d6f1428ed8f3487fdf667821fcbf59",
"assets/assets/imgs/splashImg.png": "9ace1ddb95b6e0e4a7121624ad54f740",
"assets/assets/imgs/startedBgImg.png": "ef7136e3b2a3c77b1eefdb50b0bd30c4",
"assets/assets/imgs/startedImg.png": "4f25ac6924a7fd8de659a09fef29a379",
"assets/assets/svgs/bgChecksSvg.svg": "da7a553589dec8f113a1fc47f1d592fd",
"assets/assets/svgs/bookingsSvg.svg": "76ea4176fab3075d6a8f86b1be626183",
"assets/assets/svgs/calenderSvg.svg": "fbbfc5c2af48fc518f0cf6de78e70b43",
"assets/assets/svgs/careSvg.svg": "2e1b73ef526fbd3991b905a4758ceaa5",
"assets/assets/svgs/categoriesSvg.svg": "3d642a947421239202cd3ac504dc3bda",
"assets/assets/svgs/childSvg.svg": "236a1c54259763fb380e267ad4466dec",
"assets/assets/svgs/dashboardSvg.svg": "0df8b25f7663845d6c8e0888b575af6e",
"assets/assets/svgs/educationSvg.svg": "707523d5423f1ca1863c2ed4dbf328fc",
"assets/assets/svgs/entertainmentSvg.svg": "b0819dd15d25c43d32f701da5ae6d397",
"assets/assets/svgs/exteriorMSvg.svg": "99efc1278aefab4b87f01f636442af8e",
"assets/assets/svgs/googleSvg.svg": "1f1d16b5f732fb3bcdef9c6286662fe7",
"assets/assets/svgs/healthSvg.svg": "0641a15612a02beaa1ca8343616735af",
"assets/assets/svgs/homeSvg.svg": "2b1589943f42252da4015de22acb9074",
"assets/assets/svgs/inHomeMSvg.svg": "49306899df32d4a3b80b150450a6df05",
"assets/assets/svgs/locationSvg.svg": "b9064ca6f2e49dff8b3b4db59da3fa0e",
"assets/assets/svgs/logoutSvg.svg": "6b3c5d8c453cb4294d246f4d3ed4141b",
"assets/assets/svgs/marketDownSvg.svg": "3eb9792470fd2299feea69cd5715ec40",
"assets/assets/svgs/marketUpSvg.svg": "f65af86f7cb81fb935283df4be551e0f",
"assets/assets/svgs/messageSvg.svg": "aeaf0a054fef609ed74c0511eeec57af",
"assets/assets/svgs/msgInSvg.svg": "bd7d73e96ea9831fe295c7c6bf61cbb3",
"assets/assets/svgs/msgOutSvg.svg": "4db145299580ab89ef9f5a9703851039",
"assets/assets/svgs/notiBell2Svg.svg": "e632b96998f90ea8024860a3d0d3579a",
"assets/assets/svgs/notiBellSvg.svg": "c2f9970adb2f34d6f48488de2631326b",
"assets/assets/svgs/petSvg.svg": "71335d491090d83724f300d2ca4f83c6",
"assets/assets/svgs/profileSvg.svg": "6ab9bf48c8b79742f61b228766e05dd0",
"assets/assets/svgs/requestSvg.svg": "ea6f2e5790d785ed46811aede7dfc713",
"assets/assets/svgs/searchSvg.svg": "cf39a4eafa0c49f07cfb147d23f3b6bc",
"assets/assets/svgs/settingSvg.svg": "815eca2d829e813efd33059048481961",
"assets/assets/svgs/supportSvg.svg": "5ffd58a683f9ba4fcdaf502ad3d1cd17",
"assets/assets/svgs/totalPendingSvg.svg": "c3d2f7a271458638a3708deb4ae94c9a",
"assets/assets/svgs/totalSaleSvg.svg": "f1383f4e0ea66ec84b58f609284a9ac0",
"assets/assets/svgs/totalServicesSvg.svg": "e922144ded85a0d8f3427ccb12b861c9",
"assets/assets/svgs/totalUserSvg.svg": "3114ddd90e0cea66a7bf42620016b664",
"assets/assets/svgs/userSvg.svg": "06a939edeb4eb654373928806e6b0344",
"assets/FontManifest.json": "7c480d6a512ffdc63e4849ce37af8be3",
"assets/fonts/MaterialIcons-Regular.otf": "6deb98a11264c8c5a3d77fce6e22f948",
"assets/fonts/PlusJakartaSans-Regular.ttf": "f539ae4a8884822210a4553cc88ca3dc",
"assets/NOTICES": "ddd85b286fa19f34484080c4167ee3af",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "a33dcff059731d0e9eca487138d125fe",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bcc4cf31fbb6055dca7c856ea4edbb68",
"/": "bcc4cf31fbb6055dca7c856ea4edbb68",
"main.dart.js": "27223c58c88aa0add5adb149979a7554",
"manifest.json": "743f1646dad818c939ac35f45762f980",
"version.json": "2d40fc0dd54eb928654e25dff1723038"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
