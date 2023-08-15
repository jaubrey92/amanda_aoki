const Home = () => {
  return (
    <div>
      <div className="HomeInfo">
        <img
          src="data:image/jpeg;base64,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"
          alt="Author Image"
        />
        <h2>Amanda Aoki</h2>
      </div>
      <a className="logo" href="https://www.instagram.com/amandaaaoki/">
        <img
          className="logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADn5+chISHMzMz6+vqSkpIJCQmlpaUaGhr29vbd3d2+vr7p6eny8vJPT08pKSlJSUnV1dVlZWU0NDRtbW0+Pj6JiYnFxcV+fn62trZDQ0N3d3c5OTkqKiokJCSamppXV1cXFxehoaFdXV1xcXFnZ2d1yS//AAAKjklEQVR4nOVdbWOyOgxVpIC8KqIo4htz+/8/8ercnjvhpLRQpML5OnA9pE3SJG0mE1kw5hq+9RXtk1NhT18Buzgl++jL8g2XMenxyiE0Yud6egktjNPViY2wK3qBmeVJj+x+keSZGain55rO+jVzUgT22jFdpfwCJ9/0zaqETe6oE2RoRUXfhACKyFKzIkPr0DcXEgcFHEOrbxY1aMkx3OqgPPlIti04ennfwxdC7jXkFzjHvscuiGMztfomAnygiRj9Zd+jlsLSlyVozfoesyRmlhzB9xLgA5EEv1BfG8/DRthsePu+x9oQS0F9Y77jFH1gaQ6coBhFT4agPXsFZPal9RM1FCI4j9aps/WMV8HbOuk6mgtRrFM3Ahvdeep1HhBCYMxLBUhu+L8S8d+2j5FlvIYPAcOKjjWzlmsXazaDkdXUi1cJz6qRA8e78bmu2kYLfnd4FncxzUgflatGj6mQrXkRzJS3s6MUasDbLu3MPpQLDWbuOKPN8X7Rod84+Wqjkyrg+pzgu4Pe8Gi5F/3qTwoGHeM8gnka0nN0+frBC4JWHHnV8G+pZ+e7HoYuih3pAmzLj4ZU2DBx9FIxz2AOOe6yEClbn2Q6E7xRzCiKJbsfUlNUawnewRxqoj4LkRLhTneCN4qUYXwSIhWY0VeL/gWhUQ9/hUiIsOht0HIg7OIfIQbYWT/pZOjDwIh93zMC4F0Z2LuJ/vfdHPwRpMPI3cHw8x8Wh3RbdTp9PAX/+W4udmd22viiQXb9O7DPigVzsbbJfxmYcLe10Ga35OWlXb2dls25uUAUNr8U8KYi1cVQxJfq4D5LnjVLIYefaRqsufz7hgEj8OuSFPE8XD+WrAkjO5KpnM7gEkGZ8hSDBs9+iClDf4t0icmQwbHs+TkPfonvh+DG0NZFhJTDPJ1eS9baQlPxe5toIOcc7ZF7AScaUxYiilEk988Qo7dlso2dghOL+SwpGzhN4wlhK3SZpFgLPlCUfBu4Ym/2gl3RH3TxSLGZ+yOfPzDQM1c2YcgbmPfDp4pPHsPSQpygrfCCTVz0btoLHQA4wX5xLj0MBe5i2eqiSScXHsOysvDQQwbceMx1cUknXzyG5cA2Q9PUhxooUs+QGaafZc4DWeabhtD/4CUnKiFRhuyFBb/SWi07Izun+XW/mP+qfnt+3F/z9JzVqmxOLgWsJbSF+IJ2UqGiYX66WlJm+7RcpT5XliHHHu4re32kaqIJ2pvAzE0TmKtFXeZ9vljx9mmc6iyr8m2QxPcT5JVWYv5NwLxUtEzETj1KkmQ6ZTqPhR5OoOOnwFiEJteUVXA1iSoRMmdfFSE0FycYa2ztswXmSorfHSt8ECYmFnFUFSG07cUEzCS7JUPXh3GRWqxhptmBcz1BK8lAZCbg7Vk7hvGuafXtbAcEw87gyaLskz4Yon+snCHjV4LUYANWl+tUBm7juomXMPQO7c5/2Qeg5sySzVgSA3wFQ64PIghkjbP/CxRtusKye4bcihxxwGoYz1pdouiy/uAMrnOG5kUJwen00jAa3TVDX90RxU2ztFfHDMmqiCZIGrnG3TI8qz2EWZx1Ywgjzm3QJOreJcOz+lPQ9lknhkSavB0K6bXYHUNfRMksDsvL6jPf5Z+ry/IAc7YlJLIatTOGODv5hOXuI9vGP9EnZsTb7GNXf+5BNkvbFcPgUkcvzeLqvojFWVpH8iJ3NrQrhnxXzU63HlXU4XrbmkhHrgNDvrO9AtJ7IhnzowFS2qYbhjCU/u+XRBaSyd0wy8SMOmHIOOG+A9yIA2S8H5GIv3fCkPZlip24mgh2pEGV8W26YBiThmJ+lrnqIDyTkeMNiN28jiFRT3bDSbJ6mmVkxl68vq4DhuRBqUT8w/8iphwj+hhT9wxxvdgN1yZRc4+Kkq9FF7R6hiYxpKRZWsCjpCjqvClnGBLG+iQ/RR+gIvgrQaWlnCEhwrmoGawiIzSqoBBVM8SVONPi3DxHzohYyFXsJ1UzJPy1XZtrjULC/IgtbNUMcb3Sod0dYwF24MTy7qoZYn+t+SJ8AFa7Tm2hdxUzxHpm1oreHdiJENI1ihliU9G+Ohx/uZXIq2oZwoo/sYHUAH66hYg2VcvQR6bLbmrr/yJGC3wu4pyqZQg1aarimI2Lf1rgTbUM4VxSUoiDa2hE5r9ShgYKBIreYlQDeLcDldl+GpRKhnDDqmSSEtP0JGBolTJEJSCtrf0voNU/17+nlCH6zEsVmvSOGE1TAVWjkiFDgW5lBxZh+Cevt4gqGRpo5/Shgt03PsCvl08BoVEpZGiCstSFqmV4W4jAYdrXO4QqGfrgkNFBjTW8Ywv2UMd6r0YlQxRuUKZosKoRCI4oZQh8x4u6o0TGpfrz9msZopTaSt0ZBoZ8wvpEW9cMP1Vw+wE679Q/Q7l8LR/I3PbPUOVdRMjk989w+DIc/jocli4dvj0cvk/jA9e4Y7908Vq/dPh7i+HvD4e/xx9+nGYEsbbhx0uHH/Meft5iBLmn4ecPh58DHn4efwS1GMOvpxlBTdTw69qGX5s4/PrSEdQID7/OewS1+sM/bzGCMzPDP/c0grNrIzh/OPwzpCM4BzyCs9wjOI8//DsVRnAvxgjuNhnB/TQjuGNoBPdEjeCurxHc1zaCO/e6vTdRD4bd3X2pD8Nu7i/VimEHd9DqxlD5PcKtGWp/F7QMQ3gXtO73eUsxBD9baH8nuwzwneya36svBXyvvua9EaSAeyPo3d9CDri/hd49SuSAe5To3WdG7n/gPjN69wqSAtErSO9+T1Ig+j3p3bNLCkTPLr37rkkBTdIT07x3ngyo3nl69z+UAdX/UPMelhIge1jq3YdUHHQfUr17yYqD7iWreT9gUXD6AWve01kUvJ7OmvflFgO3L7fuvdVFwO+tTvBfvJMQTZhT/jcPXRyMV3acsHsQ9XX5PwZEkrpZAqgPoC3gU5o8wE0GT+/inRo4TBL9CU8STeiL/gYtBSL9/NfghUTp3LK3QcuAKMw5PEVgCSFOd/qbDEZV8T77LCHx1NzRnSJzqIhsKYhOCTGRrGZ+NVhGFUiU3c6QejDRWoqMrABJKnkQsvHuXOXdQaqxI5MG1dwL3CY+oK9Gpcsbc5DKgnvkBwo9Tb9Bl2HhGAWnjuLUNjvbAVyfPKFBZc+41TA73J+2NzCTPMwypSty4F0Gv1ikOu2mzJRXgkvf7UAeY/rGxtIlduPxK1p4B6Uou/+DSAuOnkX2W3+AG2Kqedc+Rla/etWwomNNeUBNNFugoGmeeqwPtcOYl9ZVBdywqfmZsP6MwJ1ktE6drWe8Ct7WSdeRAL2blqmtWuEq1DLs2SsgUwsockWOKUNRN9BdyQdCUYzgbaKiKqJ3gPgtTlTYRnNsZErj3nGiSmZ1raZVsH1hJp0s899LjMsGAXpPzdGC1yBv5DAHDr3r1wtHp2l58ZuIsZkAHwi3Ko9rdYNk265+OqzZMvYOq319eGjpa/8PCvg9OEZdnPNtiyJSxO+OwMnVHS5Ug03eWIFiuKazVn+auSnstWN2EMENzCzXQbUmedb+eA2F0Iidq8hlAV1hcXViQ93qw2DMNXzrK9onp+I189YuTsk++rJ8w20QAvsPK4bKNrmysdIAAAAASUVORK5CYII="
          alt="Instagram"
        />
      </a>
      <a className="logo" href="https://www.tiktok.com/@amandaaaoki">
        <img
          className="logo"
          src="data:image/png;base64,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"
          alt="TikTok"
        />
      </a>
    </div>
  )
}

export default Home
