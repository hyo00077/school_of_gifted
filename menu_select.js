// let purpose = document.getElementById("purpose");
// let direction = document.getElementById("direction");
// let curri_track = document.getElementById("curri_track");
// let curri = document.getElementById("curri");
// let text_area = document.getElementsByClassName("class");
let index = 0;
let id_div = ["purpose", "direction", "curri_track"];

_e('purpose').addEventListener('click', function () {
  _e('text_box').innerHTML = `<p>
    첨단 IT시대의 도래로 급격히 변화하는 미래 사회에 유연하게 대응할 미래인재 육성이 필요해졌습니다. 이런 변화 속에서 영재성에 대한 기준도 고정된 창의성이 아닌 사회문화적 맥락에 따라 다양하게
    진화하고 있습니다.
  </p>
  <p>
    정부도 영재관련 법을 정비해 영재교육의 새로운 방향을 세우고, 전공지식 및 기술습득 위주의 교육 방식에서 벗어나 학생 개인의 관심과 능력에 적합한 창의성을 바탕으로, 융합적 사고력을 키우는
    인재교육을 추진해오고 있습니다.
  </p>
  <p>
    한국예술종합학교 부설 한국예술영재교육원은 이런 기조에 부응하여  2019년부터  융합분야를 신설하여 시범운영 하였습니다. 또한 2021년 올해 교육부승인으로 미디어아트를 중심으로 한
    융합영재프로그램을 정규 과정으로 본격 시작하게 되었습니다
  </p>
  <p>
    미래 세대의 핵심 역량인 디지털미디어 문해력(digitalmedia literacty)을 중심으로  창의성과 표현력, 리더십을 키우는 많은 실험과 도전, 가르치는 교사와 학생간의 긴밀한 협업/협력의
    과정이 될 것입니다.
  </p>
  `;
  // _e("big_name").innerHTML = "배경 및 목적";
  if (index > 1) {
    for (let i = 0; i < id_div.length; i++) {
      _e(id_div[i]).style.backgroundColor = "transparent";
    }
    index= 0;
  }
  
  _e("purpose").style.backgroundColor = 'rgb(' + 252 + ',' + 11 + ',' + 216 + ')';
  index += 2;

}, false);

_e('direction').addEventListener('click', function () {
  _e('text_box').innerHTML = `
  <p>
      최근 예술영재교육의 방향은 미래사회를 위한 새로운 영재성을 발굴에 목표를 두고 있습니다. 미래의 영재상은 영역 의존적(domain-oriented) 이론의 영향으로 고정된 창의성은 없으며, 시간에 따라 범주와 표준, 우수성에 대한 기준에 따라 변화합니다. 
  
  </p>  	<p>따라서 미래사회를 위한 영재성은 타고난 선천적 특성만으로 정의하는 것 으로만 말할 수 없습니다. 사회 문화적 맥락에 따라 여러 형태로 발현되기 떄문에, 타고난 능력이 사회가 인정하는 특정한 영역의 능력으로 특수화되는 과정과 그 잠재성을 통해서 인식됩니다. </p>
      <p>한국예술영재교육원 융합분야는 미디어아트를 중심으로 한 융합예술 교육입니다. 이를 위해 창의적인 관계성에 주목하고 있으며, 우정과 리더쉽 함양을 바탕으로 몸으로 부터 출발하여 다양한 미디어를 주체적으로 이용하도록 돕습니다. </p>
      <p>자기 주도적이고 끊임없는 질문들을 나누는 수평적인 관계와 우연과 우발, 무작위성 안에서 상상력이 교차하고 결합하면서 자신의 생각과 감정을 동료들과 선생님들, 더 나아가 사회와 활발히 공유할 수 있는 미디어 문해력과 표현력을 키우도록 노력합니다.  </p>
    `;

  // _e("big_name").innerHTML = "교육방향";
  if (index > 1) {
    for (let i = 0; i < id_div.length; i++) {
      _e(id_div[i]).style.backgroundColor = "transparent";
    }
    index= 0;
  }
  _e("direction").style.backgroundColor = 'rgb(' + 252 + ',' + 11 + ',' + 216 + ')';
  index += 2;

}, false);

_e('curri_track').addEventListener('click', function () {
  _e('text_box').innerHTML = `
<p>
        학생들은 공통트랙 과정 안에서, 각자가 정한 별명으로 활동을 시작하여, 서로를 탐색하고 친교를 맺는 시간을 갖습니다. 그 후, 책과 이미지를 통해 자신의 취향을 다른 친구들에게 소개하고, 자신의 기억을 통해 글쓰기를 펼치며, 사진을 활용해 이미지에 대한 기본적인 소양을 쌓게 됩니다. 일상에서 자기 자신과 친구들을 관찰하고 글과 이미지, 공간 등을 통해 다양하게 표현해보는 연습을 하면서 예술에 대한 흥미를 고취시키고 프로그램에 대한 집중력과 몰입을 이끌어냅니다.

</p>    
<p>
    	‘파운데이션 과정’이 끝나면, 두 개의 트랙으로 학생들을 나눠 영상트랙의 경우, 1학기 15주는 영상 제작에 필요한 기본적인 개념을 체화한 후, 각자의 에세이 영화를 만드는 것으로 활동을 마무리 합니다.  2학기는 쇼트와 콘티뉴이티, 몽타주의 개념 파악을 시작으로 촬영 및 편집, 사운드 디자인 등에 대한 실습을 통해 최종 작품을 만드는 것을 목표로 한다. 

</p>    
<p>
    	감각미디어 트랙의 경우, 학생들의 성향과 관심 분야를 경험할 수 있도록, 사운드, 움직임, 글쓰기, 게임 만들기 등 여러 분야의 활동으로 구성된다. 1학기는 미디어의 관점에서 각각의 감각 요소의 흐름을 경험하고 글쓰기와 목소리로 번역하고 표현하는 수업이며, 2학기에는 전체 학기의 테마를 정하고 해당 테마에 대한 창작의 재료와 자료를 수집하며, 그것을 다양한 표현 방식으로 다루어 보고 발전시키는 탐색의 과정을 거친다.

</p>        `;
  if (index > 1) {
    for (let i = 0; i < id_div.length; i++) {
      _e(id_div[i]).style.backgroundColor = "transparent";
    }
    index= 0;
  }
  _e("curri_track").style.backgroundColor = 'rgb(' + 252 + ',' + 11 + ',' + 216 + ')';
  index += 2;

  // _e("big_name").innerHTML = "교육과정 영상 감각트랙";

}, false);


function _e(id) {
  return document.getElementById(id);
}