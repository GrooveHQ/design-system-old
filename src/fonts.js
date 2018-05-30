// TODO: this is Ghetto AF - references a production copy of the fonts which is liable to
// change or be deleted!!!
//
const fontHost = 'https://beta.groovehq.com/2018-05-29-09-12-45-e103c65d1'

const fonts = `
@font-face {
  font-family: 'Groove-Roboto';
  src: url(${fontHost}/1869e98fa75096868d280ec8c4b72ce7.eot);
  src: url(${fontHost}/46a7fc42dc1644111bf76f3a9dfe37b3.woff2) format('woff2'),
    url(${fontHost}/68772c71c50534fc4026d1f20d6ecbbf.woff) format('woff'),
    url(${fontHost}/c53bce93965232513b69ff748b23cc02.ttf) format('truetype'),
    url(${fontHost}/2371f2031ab85c429cd63899c4cd1b13.svg#Roboto-Thin) format('svg'),
    url(${fontHost}/1869e98fa75096868d280ec8c4b72ce7.eot?#iefix) format('embedded-opentype');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Groove-Roboto';
  src: url(${fontHost}/947d4eb3b5e0a4ca56cfb0710f4739da.eot);
  src: url(${fontHost}/665b409ff1ae972ebccda128b3f00d46.woff2) format('woff2'),
    url(${fontHost}/fc3d4b35e4d07d4e0485cc2db0e57c77.woff) format('woff'),
    url(${fontHost}/f19e9ae531ffabc1847c2aa8c8e8a75d.ttf) format('truetype'),
    url(${fontHost}/e6817003e23a7361469a96b43e35e8ad.svg#Roboto-Regular) format('svg'),
    url(${fontHost}/947d4eb3b5e0a4ca56cfb0710f4739da.eot?#iefix)
      format('embedded-opentype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Groove-Roboto';
  src: url(${fontHost}/0c23004a4832433c44d4cacba4e83179.eot);
  src: url(${fontHost}/4f16031acd6218348ca4b60835d74cc9.woff2) format('woff2'),
    url(${fontHost}/f4fa50c4003f87e7dc10459e500933c3.woff) format('woff'),
    url(${fontHost}/9aa5df0dfc4a7d26f1ed59527ed3475f.ttf) format('truetype'),
    url(${fontHost}/142912fd3d0ca72faae06cd01db917a2.svg#Roboto-Medium) format('svg'),
    url(${fontHost}/0c23004a4832433c44d4cacba4e83179.eot?#iefix)
      format('embedded-opentype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Groove-Roboto';
  src: url(${fontHost}/470488ec54d9a21c8565fd6640d7f389.eot);
  src: url(${fontHost}/213e41aeb76a491cf8833335585f79ae.woff2) format('woff2'),
    url(${fontHost}/72e37e5bf95a8dba938c78b1d7d91253.woff) format('woff'),
    url(${fontHost}/27d971424eb4ddde73416cc6b04e9f30.ttf) format('truetype'),
    url(${fontHost}/841086507376dbb7f231ac40efdee6e6.svg#Roboto-Bold) format('svg'),
    url(${fontHost}/470488ec54d9a21c8565fd6640d7f389.eot?#iefix) format('embedded-opentype');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Groove-Roboto';
  src: url(${fontHost}/d8e7a96b551e112c1fa5384bec139ce9.eot);
  src: url(${fontHost}/a79fc2fc4f96f3d1f795b2d6cb35b196.woff2) format('woff2'),
    url(${fontHost}/23d7e55956013dddec52a7bf4e3b411d.woff) format('woff'),
    url(${fontHost}/31d51f54d6fd75795fce785dcad65bea.ttf) format('truetype'),
    url(${fontHost}/8b4e17f04bc14f36787803b9a7c54578.svg#Roboto-Black) format('svg'),
    url(${fontHost}/d8e7a96b551e112c1fa5384bec139ce9.eot?#iefix)
      format('embedded-opentype');
  font-weight: 900;
  font-style: normal;
}

/*!
This CSS resource incorporates links to font software which is
the valuable copyrighted property of WebType LLC, The Font Bureau
and/or their suppliers. You may not
attempt to copy, install, redistribute, convert, modify or reverse
engineer this font software. Please contact WebType with any
questions: http://www.webtype.com
*/

@font-face {
  font-family: 'Groove-Alright-Sans';
  src: url(${fontHost}/9d7e7abce803dac26a022f9217b5d760.eot);
  src: url(${fontHost}/2549cc75eed40da1d1fa00c76180b712.woff2)
      format('woff2'),
    url(${fontHost}/e0d2b4bd6a906441c238deaf016f4e4a.woff)
      format('woff'),
    url(${fontHost}/4f9b920fd06d0d8b1e5c93c905288960.ttf)
      format('truetype'),
    url(${fontHost}/96ff6e6fef4731b89ad101ca8568f589.svg)
      format('svg'),
    url(${fontHost}/9d7e7abce803dac26a022f9217b5d760.eot?#iefix)
      format('embedded-opentype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Groove-Alright-Sans';
  src: url(${fontHost}/0621f6380583cff32273310a2a78999e.eot);
  src: url(${fontHost}/1b56c7f8f581900dc583759e292a7c49.woff2)
      format('woff2'),
    url(${fontHost}/0e87e73b9a33c3b4717199d223b82ed9.woff)
      format('woff'),
    url(${fontHost}/c57f4b3abfd18228fb0793da5d8b2363.ttf)
      format('truetype'),
    url(${fontHost}/5d71aae755b37151236f0f816bcf9a39.svg)
      format('svg'),
    url(${fontHost}/0621f6380583cff32273310a2a78999e.eot?#iefix)
      format('embedded-opentype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Groove-Alright-Sans';
  src: url(${fontHost}/05d401ebeacb7eea559f530f41b66394.eot);
  src: url(${fontHost}/6926980c4b722f8b4d4d37ff11cea936.woff2)
      format('woff2'),
    url(${fontHost}/83cc324e8bcfae6f80669e6e25ba87a4.woff)
      format('woff'),
    url(${fontHost}/e222f3bd6fd16d10f56a6a571893afe2.ttf)
      format('truetype'),
    url(${fontHost}/5368bea1a54eadae01c92f3e04f8cff7.svg)
      format('svg'),
    url(${fontHost}/05d401ebeacb7eea559f530f41b66394.eot?#iefix)
      format('embedded-opentype');
  font-weight: 700;
  font-style: normal;
}
`

export default fonts
