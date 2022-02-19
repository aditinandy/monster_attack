const LIFEEXP = 10;
const LIFEEXP_PLY = 14;
const STRONGATTACK = 20;
const HEAL = 12;

let FULL = 100;
adjustHealthBars(FULL);
let PLAYER_LIFE = FULL;
let MONSTER_LIFE = FULL;

function attack(){
    dealMonsterDamage(LIFEEXP);
    MONSTER_LIFE -= LIFEEXP;
    console.log(MONSTER_LIFE);
    dealPlayerDamage(LIFEEXP_PLY);
    PLAYER_LIFE -= LIFEEXP_PLY;
    if(MONSTER_LIFE <= 0 && PLAYER_LIFE > 0){
        alert(`you won on ${PLAYER_LIFE}`);
        resetGame(FULL);
    }else if(PLAYER_LIFE <= 0 && MONSTER_LIFE > 0){
        alert(`loose at ${PLAYER_LIFE}`);
        resetGame(FULL);
    }
}

function strongAttack(){
    dealMonsterDamage(STRONGATTACK);
    MONSTER_LIFE -= STRONGATTACK;
    dealPlayerDamage(LIFEEXP_PLY);
    PLAYER_LIFE -= LIFEEXP_PLY;
    if(MONSTER_LIFE <= 0 && PLAYER_LIFE > 0){
        alert(`you won on ${PLAYER_LIFE}`);
        resetGame(FULL);
    }else if(PLAYER_LIFE <= 0 && MONSTER_LIFE > 0){
        alert(`loose at ${PLAYER_LIFE}`);
        resetGame(FULL);
    }
}

function heal(){
    if(PLAYER_LIFE <= LIFEEXP_PLY){
        increasePlayerHealth(HEAL);
        PLAYER_LIFE += HEAL;
    }else{
        alert(`you are full at ${PLAYER_LIFE}`);
    }
    removeBonusLife();
}


attackBtn.addEventListener('click', attack);
strongAttackBtn.addEventListener('click', strongAttack);
healBtn.addEventListener('click', heal);