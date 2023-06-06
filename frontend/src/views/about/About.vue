<template>
  <div>
    <div class="about-container">
      <div class="about">
        <div class="desc">
          <h4 style="margin-bottom: 42px">
            Portali më i ri dhe më serioz ne Kosovë
          </h4>
          <p>
            The Truth është portal i pavarur i lajmeve në gjuhën shqipe i
            themeluar në vitin 2023, me bazë kryesore në Prishtinë dhe seli të
            dytë në Maqedoni. The Truth ka arritur të ruajë paanshmërinë dhe të
            jetë burim i lajmeve me kredibilitetin më të lartë në të gjithë
            trevat shqipfolëse.
          </p>

          <p>
            Misioni kryesor i The Truth është informimi i saktë i qytetarëve në
            kohë reale, duke ruajtur fuqishëm epitetin e medias së pavarur dhe
            pozicionin si lider në fushën e medias online
          </p>
        </div>
        <div class="image">
          <img src="@/assets/team.jpg" alt="" />
        </div>
      </div>

      <div class="about-team">
        <h5 style="text-align: center">Ekipi i The Truth</h5>
        <p style="text-align: center">
          Puna e shkëlqyer dhe korrekte e ekipit tonë e ka renditur The Truth si
          burimin kryesor të informimit në vend dhe rajon. Falë përkushtimit dhe
          bashkëpunimit të ngushtë në mes të punonjësve në departamente të
          ndryshme, në The Truth numërohen miliona shfletime të lajmeve të
          lexuara çdo muaj.
        </p>
      </div>
      <div class="desku-informativ">
        <h5 style="text-align: center">Desku Informativ</h5>
        <div class="stafi">
          <div class="stafi-container">
            <img src="@/assets/team.jpg" alt="" />
            <h5>Filan Fisteku</h5>
            <p>Kryeredaktor</p>
          </div>
          <div class="stafi-container">
            <img src="@/assets/team.jpg" alt="" />
            <h5>Filan Fisteku</h5>
            <p>Kryeredaktor</p>
          </div>
          <div class="stafi-container">
            <img src="@/assets/team.jpg" alt="" />
            <h5>Filan Fisteku</h5>
            <p>Kryeredaktor</p>
          </div>
          <div class="stafi-container">
            <img src="@/assets/team.jpg" alt="" />
            <h5>Filan Fisteku</h5>
            <p>Kryeredaktor</p>
          </div>
          <div class="stafi-container">
            <img src="@/assets/team.jpg" alt="" />
            <h5>Filan Fisteku</h5>
            <p>Kryeredaktor</p>
          </div>
          <div class="stafi-container">
            <img src="@/assets/team.jpg" alt="" />
            <h5>Filan Fisteku</h5>
            <p>Kryeredaktor</p>
          </div>
          <div class="stafi-container">
            <img src="@/assets/team.jpg" alt="" />
            <h5>Filan Fisteku</h5>
            <p>Kryeredaktor</p>
          </div>
          <div class="stafi-container">
            <img src="@/assets/team.jpg" alt="" />
            <h5>Filan Fisteku</h5>
            <p>Kryeredaktor</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about-view",
};
</script>

<style scoped>
.about-team {
  margin: 32px 0;
}
.about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 42px;
}

.stafi {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  justify-content: center;
}

.stafi-container img {
  width: 320px;
}

@media (max-width: 1200px) {
  .about {
    grid-template-columns: 1fr;
  }

  .desc {
    margin: 0px 30px;
    width: 80%;
  }

  .image img {
    width: 100%;
  }
}
</style>
