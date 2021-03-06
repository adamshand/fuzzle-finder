/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('photos').del()
  await knex('photos').insert([
    {
      id: '079858f8227e1684522e8f415f519020',
      date: '2022-06-03',
      title: null,
      tags: 'species/dog name/audrey with/beach',
      starred: null,
      views: 0,
    },
    {
      id: '8bfa8df77cf327987c98da50070c8195',
      date: '2022-06-09',
      title: null,
      tags: 'species/dog with/snoozles name/audrey',
      starred: null,
      views: 0,
    },
    {
      id: 'a524fe7eab2bb2901d8bd586e0929253',
      date: '2022-06-09',
      title: null,
      tags: 'name/emily species/goat species/dog name/audrey with/garden with/kapiti with/sunset name/dio',
      starred: null,
      views: 0,
    },
    {
      id: 'eab139848d7797b803ac47f2ec88fb54',
      date: '2012-10-01',
      title: null,
      tags: 'species/dog name/dio',
      starred: null,
      views: 0,
    },
    {
      id: '36befaa1637b46100d67803318a4f537',
      date: '2019-11-04',
      title: null,
      tags: 'with/derp species/human name/tink',
      starred: null,
      views: 0,
    },
    {
      id: 'ec5710ff46f00549c1bbf45da95c4509',
      date: '2020-05-11',
      title: 'Dog is my copilot',
      tags: 'with/coffee name/audrey species/human name/adam species/dog with/car',
      starred: null,
      views: 0,
    },
    {
      id: '1b66d6466f82d6e56abab9e90d085a94',
      date: '2022-03-16',
      title: null,
      tags: 'species/cat species/human name/andre name/phil',
      starred: null,
      views: 0,
    },
    {
      id: '1d3fbd737e4d6b008ce48fbb0713b1eb',
      date: '2021-12-06',
      title: null,
      tags: 'species/human name/tink',
      starred: null,
      views: 1,
    },
    {
      id: 'e12edfefab13396cddff77de73302dcd',
      date: '2018-02-19',
      title: 'Melon collie',
      tags: 'with/hat with/watermelon name/audrey species/dog',
      starred: null,
      views: 0,
    },
    {
      id: '3bc8dafbbf7b4030d5047b3e6bd6373f',
      date: '2022-06-09',
      title: null,
      tags: 'species/dog with/hat name/audrey',
      starred: null,
      views: 0,
    },
    {
      id: 'e84a74ce3c0c8e8d2013c0743eea3b71',
      date: '2015-03-14',
      title: null,
      tags: 'with/smiles species/human name/adam with/food',
      starred: null,
      views: 0,
    },
    {
      id: '6200f811e748db4785eb5684bf5edff2',
      date: '2022-06-03',
      title: null,
      tags: 'species/dog name/audrey with/beach',
      starred: null,
      views: 0,
    },
    {
      id: '0190a6a74844ead59ff81d0689da09d0',
      date: '2019-05-09',
      title: null,
      tags: 'species/capybara',
      starred: null,
      views: 0,
    },
    {
      id: '4ec2438bad611339e5f1feb3eb870a4d',
      date: '2017-05-12',
      title: 'Buddies',
      tags: 'species/cat species/human name/adam name/andre',
      starred: null,
      views: 0,
    },
    {
      id: '5ff1ecc1f11b8fa098a69e06085908cd',
      date: '2020-09-13',
      title: null,
      tags: 'species/human name/adam with/sunglasses with/derp',
      starred: null,
      views: 0,
    },
    {
      id: '9dd6ba814396324843f8323e1d243d0a',
      date: '2022-06-09',
      title: 'Hungry',
      tags: 'with/derp name/audrey species/human name/adam species/dog with/teeth',
      starred: null,
      views: 0,
    },
    {
      id: '36a2951e0e1202865c6ef3b4fe7157a5',
      date: '2022-06-09',
      title: 'Does this sofa fit three?',
      tags: 'name/pam name/brett species/human species/dog name/dio',
      starred: null,
      views: 0,
    },
    {
      id: '1686dd5d7036c32778310b8e104e1ff0',
      date: '2022-06-09',
      title: 'Derp hats',
      tags: 'with/hat name/audrey species/dog name/dio',
      starred: null,
      views: 0,
    },
    {
      id: 'c5f1afccb57ed40a4329e7240bd31b61',
      date: '2022-06-09',
      title: null,
      tags: 'name/audrey with/garden species/dog name/dio',
      starred: null,
      views: 0,
    },
    {
      id: '0bb4e2b96b3de555cfbe8709d8a8ebf6',
      date: '2022-06-09',
      title: null,
      tags: 'name/tink with/beach with/smiles species/human species/dog name/dio',
      starred: null,
      views: 0,
    },
    {
      id: '980b1e99ca230b869487da8f1e28862f',
      date: '2022-04-02',
      title: null,
      tags: 'with/food species/bee',
      starred: null,
      views: 0,
    },
    {
      id: '764fba2ee73e8acd3b8b28f0b9e6695d',
      date: '2022-06-09',
      title: 'DIo sunset',
      tags: 'with/kapiti with/sunset species/dog name/dio',
      starred: null,
      views: 0,
    },
    {
      id: '8c405c1d777bd49c32e5756fd4a7f577',
      date: '2011-08-27',
      title: null,
      tags: 'species/cat name/andre',
      starred: null,
      views: 0,
    },
    {
      id: 'b10120967c0e8c058c9c707a588d62d6',
      date: '2012-10-01',
      title: null,
      tags: 'species/dog name/dio',
      starred: null,
      views: 0,
    },
    {
      id: '2b233455d38f77fcb0b7beb36d66c9df',
      date: '2022-06-14',
      title: null,
      tags: 'name/audrey species/human name/penny species/dog name/dio',
      starred: null,
      views: 0,
    },
    {
      id: '248f2bde75d6d28d720937e5ed3326b8',
      date: '2017-07-15',
      title: 'Super Fuzz!',
      tags: 'species/dog name/dio',
      starred: null,
      views: 0,
    },
    {
      id: '165a76c2571be5ff2c25461f824b2070',
      date: '2022-06-09',
      title: null,
      tags: 'species/dog name/dio',
      starred: null,
      views: 0,
    },
    {
      id: 'cba85df0825c450ba9a32505d7603378',
      date: '2013-09-30',
      title: null,
      tags: 'species/cat name/andre',
      starred: null,
      views: 0,
    },
    {
      id: 'a496ad4d38b8b75aaf53e4382d124efe',
      date: '2022-06-09',
      title: null,
      tags: 'species/dog name/audrey name/dio',
      starred: null,
      views: 0,
    },
    {
      id: '529672321f137c66415206d0197733e2',
      date: '2019-11-25',
      title: 'Chanelling Ned',
      tags: 'species/human name/adam name/tink with/derp',
      starred: null,
      views: 0,
    },
    {
      id: 'e72dc074c57a8618489c66f591ac50bd',
      date: '2011-08-27',
      title: null,
      tags: 'species/cat name/andre',
      starred: null,
      views: 0,
    },
    {
      id: '61a6a17dc31cebb177d14ffa9ac145d7',
      date: '2010-08-07',
      title: 'Claude',
      tags: 'species/cat name/claude',
      starred: null,
      views: 0,
    },
    {
      id: '45d7925070b9aac8fe353db2ad2167a1',
      date: '2022-06-09',
      title: null,
      tags: 'species/dog name/dio',
      starred: null,
      views: 0,
    },
    {
      id: '72cf3535ed5665df3c18474a37b68b1b',
      date: '2022-06-04',
      title: null,
      tags: 'species/dog name/audrey',
      starred: null,
      views: 0,
    },
    {
      id: '39cb81c095474018a62304d85c8aed63',
      date: '2022-06-02',
      title: 'Morning coffee run',
      tags: 'with/smiles species/human name/adam species/dog with/car',
      starred: null,
      views: 0,
    },
  ])
}
