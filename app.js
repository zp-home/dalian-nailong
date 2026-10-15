(() => {
  'use strict';

  const colleges = {
    code: {
      name: '奶龙软件工程学院',
      motto: '把灵感写进代码，把 Bug 留在昨天。',
      paragraphs: [
        '这里的第一堂课，是让一只奶龙学会对世界说 Hello。我们把软件工程的学习日常变成校园脑洞：一起拆解需求、设计界面、写下代码，也认真对待每一次“为什么在我电脑上可以运行”。',
        '从一个好用的小工具，到一款能让同学会心一笑的应用，项目始终是主角。组队时可以带零食，但请记得带上清晰的思路，以及愿意一起找 Bug 的耐心。'
      ],
      courses: ['面向奶龙的程序设计', 'Bug 追踪与情绪稳定', '从零到一的校园应用工坊'],
      graduation: '做出一个自己愿意每天使用的小作品，并让另一只奶龙看懂你的 README。'
    },
    ai: {
      name: '人工智龙学院',
      motto: '给好奇心一点算力。',
      paragraphs: [
        '如果奶龙会学习，它会先认出食堂的鸡腿，还是先学会准时起床？在这所脑洞学院，我们用轻松的问题打开人工智能的大门，理解数据、模型与人之间的关系。',
        '训练一个模型，也训练提出好问题的能力。我们想象用机器学习识别校园里的四季，用智能工具帮助整理知识，同时保留奶龙最珍贵的本领：独立思考与大胆发问。'
      ],
      courses: ['奶龙行为识别入门', '机器学习与鸡腿分类', '负责任的人工智能创作'],
      graduation: '向一位没有学过人工智能的朋友，解释你的模型会什么、不会什么，以及为什么。'
    },
    design: {
      name: '数字摸鱼艺术学院',
      motto: '认真观察世界，快乐制造灵感。',
      paragraphs: [
        '“摸鱼”在这里是一种观察练习：留意坡道旁的光、雨后石墙的颜色，以及同学打开新作品时的表情。把这些小发现，变成海报、动画、交互和会讲故事的数字作品。',
        '灵感可以天马行空，作品需要照顾真实的使用感受。我们鼓励画出自己的奶龙，也鼓励推敲每个按钮、每行文字和每一个让界面更好用的细节。'
      ],
      courses: ['奶龙表情与角色动画', '校园灵感采集与视觉叙事', '让按钮愿意被点的交互设计'],
      graduation: '完成一件有自己风格的作品，并清楚说明它想为谁带来什么。'
    },
    business: {
      name: '零食数字商学院',
      motto: '算得清成本，也装得下热爱。',
      paragraphs: [
        '从一包薯片的定价，到一次校园市集的运营，商业问题藏在生活的每个角落。这所脑洞学院把数字商业的学习，放进奶龙熟悉的零食、社团和小小创意里。',
        '我们在想象中的市集练习用户研究、数据分析和团队协作。所有计划都要回答一个朴素的问题：这件事到底解决了谁的需要，能不能长久地做好？'
      ],
      courses: ['零食经济学与预算管理', '校园市集数字运营', '用数据讲明白一门小生意'],
      graduation: '写出一份逻辑清楚的创意计划，既算明白账，也说明白它的价值。'
    },
    language: {
      name: '龙语国际交流学院',
      motto: '一句“你好”，让世界变得更近。',
      paragraphs: [
        '奶龙语言的核心语法，或许是“先微笑，再开口”。在这所脑洞学院，我们把语言学习想象成一次持续发生的交流：介绍自己的城市，也认真听见不同的文化与生活。',
        '练习从来不只在单词本里。为一位远方的朋友设计校园路线，给自己的作品写一段外语介绍，或一起讨论一个有趣的话题，都是迈向世界的小小一步。'
      ],
      courses: ['用外语介绍一只奶龙', '跨文化交流与校园故事', '技术作品的双语表达'],
      graduation: '用正在学习的语言，完整分享一件让你感到自豪的小事。'
    },
    health: {
      name: '健康午睡科技学院',
      motto: '照顾好自己，灵感才有续航。',
      paragraphs: [
        '奶龙相信，成长的课程表里也应留出散步、休息和好好吃饭的位置。这所脑洞学院用健康科技的视角，关注学习生活中的舒适、节奏与日常习惯。',
        '从友好的运动提醒，到更易理解的健康信息界面，我们设想用技术照顾生活的小细节。这里的“午睡科技”是校园玩梗，不提供医学判断，也没有代替专业服务的魔法。'
      ],
      courses: ['久坐奶龙的课间活动设计', '健康信息的友好表达', '日常习惯与可穿戴交互'],
      graduation: '设计一个温柔实用的生活小工具，同时给自己的日常留出规律的休息时间。'
    }
  };

  const stories = {
    welcome: {
      label: '校园脑洞 · 迎新特辑',
      title: '开学第一课：先认识身边的那只奶龙',
      paragraphs: [
        '如果校园迎新有一份奶龙版本的清单，第一项大概是：放下行李，认识一个新朋友。接着找到教室、记住回宿舍的路，再给明天的自己留一点期待。',
        '我们想象中的迎新活动，不比谁更快适应，而是收集每个人的“第一次”：第一次走过校园坡道，第一次加入兴趣小组，第一次勇敢举手。每个小小的开始，都值得被认真记住。',
        '欢迎来到这份校园趣味创作。新学期可以有很多计划，也可以先从一句“同学你好”开始。'
      ]
    },
    debug: {
      label: '学术脑洞 · 项目日常',
      title: '深夜 Debug 研究取得阶段性进展：原来少了一个分号',
      paragraphs: [
        '在奶龙的平行校园里，一次“程序为什么不运行”的讨论，最终以找到一个小小的语法错误告一段落。大家决定先庆祝三秒，再补上说明与检查。',
        '这个虚构故事的主角，其实是每一个认真排查问题的人：读懂报错、缩小范围、验证猜想，比盯着屏幕许愿更有效。偶尔换个角度，或者找同学一起看一眼，也能让思路重新发光。',
        '今日奶龙笔记：写代码需要热情，也需要耐心。困了就休息，明天醒来再与 Bug 好好交流。'
      ]
    },
    canteen: {
      label: '生活脑洞 · 食堂观察',
      title: '奶龙发布午饭选择题：今天的快乐藏在哪个窗口？',
      paragraphs: [
        '午间最有参与感的校园讨论，可能不是一道难题，而是那句熟悉的“吃什么”。奶龙为此设计了一份想象中的问卷：想吃热乎的、清爽的，还是和朋友一起慢慢挑？',
        '这条趣味消息没有食堂排名，也没有真实菜单推荐。它只想记录校园生活里的小小幸福：课程结束后的松一口气、端着餐盘找到空位的默契，以及一顿让人恢复精神的午饭。',
        '愿每一位忙碌的同学，都能给吃饭留一点从容。奶龙友情补充：拍照可以等一等，饭凉了就少一分快乐。'
      ]
    },
    society: {
      label: '校园脑洞 · 社团灵感',
      title: '“什么都想试试”社团开始招募想象力',
      paragraphs: [
        '这是一则虚构的社团招募：欢迎想画画、想拍照、想写程序，也欢迎暂时只知道“我想试试”的同学。唯一的入社考题，是分享一个最近让你产生好奇心的问题。',
        '在想象中的第一次活动里，大家一起做一张校园灵感地图。有人记录建筑的线条，有人收集有趣的声音，有人把所有点子写进一个可以点击的小网页。',
        '这所趣味大学相信，兴趣不必一开始就很专业。愿意走出第一步，愿意听见伙伴的想法，就已经是一段好故事的开头。'
      ]
    }
  };

  const tours = {
    campus: {
      label: '校园漫游 · 第一站',
      title: '把校园，走成自己的地图',
      image: 'assets/campus-overview.webp',
      alt: '校园建筑与绿意环绕的校园风景',
      caption: '校园实景参考 · 奶龙视角趣味导览',
      paragraphs: [
        '把脚步放慢一点，从建筑之间的路开始认识校园。留意窗边的光、道路转弯后的风景，也留意那些将来会变得熟悉的小地方。',
        '奶龙的漫游建议：给自己安排一次不赶时间的散步，记住一个适合发呆的角落，再用一张照片为今天命名。本导览是氛围介绍，不作为实际路线或开放信息。'
      ]
    },
    sovo: {
      label: '校园漫游 · 灵感站',
      title: '从一个小点子，到可以展示的作品',
      image: 'assets/campus-life.webp',
      alt: '校园学习生活与实践空间实景',
      caption: '校园生活参考 · 奶龙创作灵感站',
      paragraphs: [
        '好的创意常常从一句“要是能这样就好了”开始。奶龙设想的项目日常，是和伙伴一起把模糊的点子画出来、做出来，再交给真实的使用体验来回答。',
        '在这份趣味导览里，SOVO 是通往实践与创作的灵感关键词。挑一个你关心的小问题，列出三个可能的办法，今天就完成最小的一步。真实教学与实践安排请以学校发布的信息为准。'
      ]
    },
    seasons: {
      label: '校园漫游 · 四季站',
      title: '每个季节，都有一张校园明信片',
      image: 'assets/campus-seasons.webp',
      alt: '不同季节中的校园自然景色',
      caption: '校园风景参考 · 写给四季的明信片',
      paragraphs: [
        '同一条路，在不同季节会有不同的表情。新叶、树荫、秋色与冬日的空气，把日常往返的校园变成一本慢慢翻动的相册。',
        '奶龙留下一项轻松的校园任务：选一个喜欢的视角，在不同的日子回来拍照。等到回看时，你会发现，风景在变，自己也在一点点长大。'
      ]
    }
  };

  const onReady = (callback) => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback, { once: true });
    } else {
      callback();
    }
  };

  const makeElement = (tag, className, value) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (value !== undefined) element.textContent = value;
    return element;
  };

  const escapeXML = (value) => String(value)
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\uFFFE\uFFFF]/g, '')
    .replace(/[&<>"']/g, (character) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'
    }[character]));

  onReady(() => {
    const menuToggle = document.querySelector('#menu-toggle');
    const navigation = document.querySelector('#site-nav');
    const detailDialog = document.querySelector('#detail-dialog');
    const detailContent = document.querySelector('#detail-content');
    const enrollDialog = document.querySelector('#enroll-dialog');
    const enrollForm = document.querySelector('#enroll-form');
    const enrollResult = document.querySelector('#enroll-result');
    const backToTop = document.querySelector('#back-to-top');
    const dialogTriggers = new WeakMap();
    let currentCard = null;

    const reduceMotion = () => typeof window.matchMedia === 'function'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const closeNavigation = () => {
      if (navigation) navigation.classList.remove('is-open');
      if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    };

    if (menuToggle && navigation) {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.addEventListener('click', () => {
        const isOpen = navigation.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
      });
      navigation.addEventListener('click', (event) => {
        if (event.target instanceof Element && event.target.closest('a, button')) {
          closeNavigation();
        }
      });
    }

    const syncDialogState = () => {
      document.body.classList.toggle('modal-open', Boolean(document.querySelector('dialog[open]')));
    };

    const openDialog = (dialog, trigger) => {
      if (!dialog || dialog.hasAttribute('open')) return;
      closeNavigation();
      if (trigger instanceof HTMLElement) dialogTriggers.set(dialog, trigger);
      if (typeof dialog.showModal === 'function') {
        dialog.showModal();
      } else {
        dialog.setAttribute('open', '');
        dialog.setAttribute('role', 'dialog');
        dialog.setAttribute('aria-modal', 'true');
      }
      syncDialogState();
      const firstFocus = dialog.querySelector('#detail-title, #student-name, [autofocus], button');
      if (firstFocus instanceof HTMLElement) firstFocus.focus({ preventScroll: true });
    };

    const restoreDialogFocus = (dialog) => {
      syncDialogState();
      const trigger = dialogTriggers.get(dialog);
      if (trigger && trigger.isConnected) trigger.focus({ preventScroll: true });
    };

    const closeDialog = (dialog) => {
      if (!dialog || !dialog.hasAttribute('open')) return;
      if (typeof dialog.close === 'function') {
        dialog.close();
      } else {
        dialog.removeAttribute('open');
        dialog.removeAttribute('aria-modal');
        restoreDialogFocus(dialog);
      }
    };

    document.querySelectorAll('dialog').forEach((dialog) => {
      dialog.addEventListener('close', () => restoreDialogFocus(dialog));
      dialog.addEventListener('click', (event) => {
        if (event.target !== dialog) return;
        const bounds = dialog.getBoundingClientRect();
        const isBackdrop = event.clientX < bounds.left || event.clientX > bounds.right
          || event.clientY < bounds.top || event.clientY > bounds.bottom;
        if (isBackdrop) closeDialog(dialog);
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      if (navigation && navigation.classList.contains('is-open')) {
        closeNavigation();
        if (menuToggle) menuToggle.focus();
      }
      // Modern browsers handle native dialog Escape; this also supports the fallback.
      document.querySelectorAll('dialog[open]').forEach((dialog) => {
        if (typeof dialog.showModal !== 'function') closeDialog(dialog);
      });
    });

    const setDetailHeader = (label, title) => {
      if (!detailContent) return;
      detailContent.replaceChildren();
      detailContent.append(makeElement('p', 'dialog-eyebrow', label));
      const heading = makeElement('h2', 'dialog-title', title);
      heading.id = 'detail-title';
      heading.tabIndex = -1;
      detailContent.append(heading);
      if (detailDialog) detailDialog.setAttribute('aria-labelledby', heading.id);
    };

    const appendParagraphs = (paragraphs) => {
      paragraphs.forEach((paragraph) => {
        detailContent.append(makeElement('p', 'dialog-description', paragraph));
      });
    };

    const showCollege = (key, trigger) => {
      const college = colleges[key];
      if (!college || !detailDialog || !detailContent) return;
      setDetailHeader('脑洞学科 / IMAGINARY SCHOOL', college.name);
      detailContent.append(makeElement('p', 'dialog-motto', college.motto));
      appendParagraphs(college.paragraphs);
      const section = makeElement('section', 'dialog-section');
      section.append(makeElement('h3', '', '三门想象中的课程'));
      const courses = makeElement('ul', 'course-list');
      college.courses.forEach((course) => courses.append(makeElement('li', '', course)));
      section.append(courses);
      detailContent.append(section);
      const graduation = makeElement('section', 'dialog-section');
      graduation.append(makeElement('h3', '', '奶龙式毕业要求'));
      graduation.append(makeElement('p', 'dialog-description', college.graduation));
      detailContent.append(graduation);
      detailContent.append(makeElement('p', 'dialog-note', '以上为校园趣味创作，学院、课程与毕业要求均为虚构；不代表大连东软信息学院的真实教学或招生安排。'));
      openDialog(detailDialog, trigger);
    };

    const showStory = (key, trigger) => {
      const story = stories[key];
      if (!story || !detailDialog || !detailContent) return;
      setDetailHeader(story.label, story.title);
      appendParagraphs(story.paragraphs);
      detailContent.append(makeElement('p', 'dialog-note', '本文为原创校园趣味故事，人物、活动与情节均为想象，不是学校官方新闻。'));
      openDialog(detailDialog, trigger);
    };

    const showTour = (key, trigger) => {
      const tour = tours[key];
      if (!tour || !detailDialog || !detailContent) return;
      setDetailHeader(tour.label, tour.title);
      const figure = makeElement('figure', 'dialog-figure');
      const photo = makeElement('img', '');
      photo.src = tour.image;
      photo.alt = tour.alt;
      photo.loading = 'lazy';
      photo.decoding = 'async';
      photo.addEventListener('error', () => { figure.hidden = true; }, { once: true });
      figure.append(photo, makeElement('figcaption', '', tour.caption));
      detailContent.append(figure);
      appendParagraphs(tour.paragraphs);
      detailContent.append(makeElement('p', 'dialog-note', '校园实景与趣味解说结合展示；本网站为独立校园趣味作品。实际校园活动、来访与开放安排，请查询学校官方渠道。'));
      openDialog(detailDialog, trigger);
    };

    document.addEventListener('click', (event) => {
      if (!(event.target instanceof Element)) return;
      const trigger = event.target.closest('[data-college], [data-story], [data-tour], [data-enroll], [data-close]');
      if (!trigger) return;
      if (trigger.hasAttribute('data-close')) {
        const dialog = trigger.closest('dialog');
        if (dialog) {
          event.preventDefault();
          closeDialog(dialog);
        }
      } else if (trigger.hasAttribute('data-college')) {
        if (colleges[trigger.dataset.college] && detailDialog && detailContent) {
          event.preventDefault();
          showCollege(trigger.dataset.college, trigger);
        }
      } else if (trigger.hasAttribute('data-story')) {
        if (stories[trigger.dataset.story] && detailDialog && detailContent) {
          event.preventDefault();
          showStory(trigger.dataset.story, trigger);
        }
      } else if (trigger.hasAttribute('data-tour')) {
        if (tours[trigger.dataset.tour] && detailDialog && detailContent) {
          event.preventDefault();
          showTour(trigger.dataset.tour, trigger);
        }
      } else if (trigger.hasAttribute('data-enroll') && enrollDialog) {
        event.preventDefault();
        openDialog(enrollDialog, trigger);
      }
    });

    const createCardId = () => {
      const timestamp = Date.now().toString(36).toUpperCase();
      const random = new Uint32Array(1);
      if (window.crypto && typeof window.crypto.getRandomValues === 'function') {
        window.crypto.getRandomValues(random);
      } else {
        random[0] = Math.floor(Math.random() * 0x100000000);
      }
      return `DNLU-${timestamp.slice(-6)}-${random[0].toString(36).toUpperCase().padStart(6, '0').slice(-4)}`;
    };

    const updateText = (selector, text) => {
      const target = document.querySelector(selector);
      if (target) target.textContent = text;
    };

    if (enrollForm && enrollResult) {
      const nameInput = enrollForm.querySelector('#student-name');
      const collegeInput = enrollForm.querySelector('#student-college');
      const consentInput = enrollForm.querySelector('#fun-consent');

      if (nameInput) nameInput.addEventListener('input', () => nameInput.setCustomValidity(''));
      if (collegeInput) collegeInput.addEventListener('change', () => collegeInput.setCustomValidity(''));

      enrollForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!nameInput || !collegeInput || !consentInput) return;
        const name = Array.from(nameInput.value.trim()).slice(0, 12).join('');
        nameInput.setCustomValidity(name ? '' : '请填写一个校园昵称。');
        collegeInput.setCustomValidity(colleges[collegeInput.value] ? '' : '请选择一所脑洞学院。');
        if (!enrollForm.reportValidity() || !consentInput.checked) return;

        const date = new Date();
        const dateLabel = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
        const selectedOption = collegeInput.options[collegeInput.selectedIndex];
        currentCard = {
          name,
          college: selectedOption ? selectedOption.textContent.trim() : colleges[collegeInput.value].name,
          id: createCardId(),
          date: dateLabel
        };

        updateText('#card-name', currentCard.name);
        updateText('#card-college', currentCard.college);
        updateText('#card-id', currentCard.id);
        updateText('#card-date', currentCard.date);
        enrollForm.hidden = true;
        enrollResult.hidden = false;
        enrollResult.setAttribute('aria-live', 'polite');
        enrollResult.tabIndex = -1;
        enrollResult.focus({ preventScroll: true });
      });
    }

    const resetEnrollment = () => {
      if (!enrollForm || !enrollResult) return;
      currentCard = null;
      clearPNG();
      enrollForm.reset();
      enrollForm.querySelectorAll('input, select').forEach((field) => field.setCustomValidity(''));
      enrollResult.hidden = true;
      enrollForm.hidden = false;
      const nameInput = enrollForm.querySelector('#student-name');
      if (nameInput) nameInput.focus({ preventScroll: true });
    };

    const resetButton = document.querySelector('#enroll-reset');
    if (resetButton) resetButton.addEventListener('click', resetEnrollment);

    const createCardSVG = (cardData) => {
      const card = Object.fromEntries(Object.entries(cardData).map(([key, value]) => [key, escapeXML(value)]));
      // All user-provided content is escaped before being embedded in the SVG.
      return `<svg xmlns="http://www.w3.org/2000/svg" width="1120" height="680" viewBox="0 0 1120 680">
          <title>大连奶龙大学校园趣味纪念卡</title>
          <desc>昵称 ${card.name}，脑洞学院 ${card.college}。仅为趣味纪念，不是录取凭证。</desc>
          <rect width="1120" height="680" rx="36" fill="#f7f4eb"/>
          <rect x="22" y="22" width="1076" height="636" rx="25" fill="none" stroke="#183b32" stroke-width="2"/>
          <rect x="22" y="22" width="1076" height="132" rx="25" fill="#183b32"/>
          <path d="M22 125h1076v29H22z" fill="#183b32"/>
          <circle cx="86" cy="87" r="35" fill="#f9ce44"/>
          <text x="86" y="102" text-anchor="middle" font-size="40" font-weight="700" fill="#183b32" font-family="PingFang SC,Microsoft YaHei,sans-serif">龙</text>
          <g font-family="PingFang SC,Microsoft YaHei,Arial,sans-serif">
            <text x="142" y="84" font-size="36" font-weight="700" fill="#fffdf5">大连奶龙大学</text>
            <text x="144" y="116" font-size="15" letter-spacing="3" fill="#c8d8cc">DALIAN MILKDRAGON UNIVERSITY</text>
            <text x="1043" y="91" text-anchor="end" font-size="17" fill="#f9ce44" letter-spacing="3">校园趣味纪念卡</text>
            <text x="73" y="220" font-size="15" letter-spacing="3" fill="#62776c">A LITTLE CURIOSITY. A BIG NEW WORLD.</text>
            <text x="69" y="302" font-size="${cardData.name.length > 8 ? 40 : 52}" font-weight="700" fill="#183b32">${card.name}</text>
            <text x="74" y="349" font-size="22" fill="#183b32">欢迎加入 ${card.college}</text>
            <path d="M74 386h572" stroke="#c7cdc0"/>
            <text x="74" y="423" font-size="15" fill="#62776c">纪念编号</text>
            <text x="74" y="455" font-size="19" fill="#183b32" letter-spacing="1">${card.id}</text>
            <text x="455" y="423" font-size="15" fill="#62776c">相遇日期</text>
            <text x="455" y="455" font-size="21" fill="#183b32">${card.date}</text>
            <text x="74" y="523" font-size="18" fill="#62776c">愿你始终好奇，始终快乐，始终有新的发现。</text>
            <text x="74" y="611" font-size="15" fill="#62776c">独立校园趣味创作 · 虚构学科 · 非录取凭证</text>
            <text x="1040" y="611" text-anchor="end" font-size="14" fill="#62776c">FOR FUN &amp; MEMORIES</text>
          </g>
          <g transform="translate(752 222)" stroke="#183b32" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="116" cy="142" r="139" fill="#ebe9d8" stroke="none"/>
            <path d="M66 190c-5 25-19 48-24 72h49l21-35 21 35h51c-4-26-17-56-27-75" fill="#f9ce44" stroke-width="5"/>
            <path d="M34 96 17 60l42 12M178 71l41-16-16 47" fill="#f7b938" stroke-width="5"/>
            <path d="M41 68C68 28 158 22 190 62c22 28 22 91-5 123-26 31-103 33-139 5C13 165 13 108 41 68Z" fill="#f9ce44" stroke-width="5"/>
            <ellipse cx="79" cy="111" rx="7" ry="10" fill="#183b32" stroke="none"/>
            <ellipse cx="152" cy="111" rx="7" ry="10" fill="#183b32" stroke="none"/>
            <path d="M97 142q20 22 40 0" fill="none" stroke-width="5"/>
            <ellipse cx="57" cy="139" rx="16" ry="8" fill="#eea055" stroke="none"/>
            <ellipse cx="174" cy="139" rx="16" ry="8" fill="#eea055" stroke="none"/>
            <path d="m169 190 37 12 28-20" fill="none" stroke-width="17"/>
            <path d="m169 190 37 12 28-20" fill="none" stroke="#f9ce44" stroke-width="10"/>
            <path d="m35 211 29-20" fill="none" stroke-width="16"/>
            <path d="m35 211 29-20" fill="none" stroke="#f9ce44" stroke-width="9"/>
            <path d="m233 162 7 6 11-15" fill="none" stroke-width="4"/>
            <path d="m4 30 6-13 7 13 14 3-11 10 2 15-12-7-13 7 3-15-11-10z" fill="#f9ce44" stroke="none"/>
          </g>
        </svg>`;
    };

    const cardFilename = (card, extension) => `大连奶龙大学-校园纪念卡-${card.id}.${extension}`;
    const svgBlob = (card) => new Blob([createCardSVG(card)], { type: 'image/svg+xml;charset=utf-8' });
    const downloadButton = document.querySelector('#download-card');
    if (downloadButton) {
      downloadButton.addEventListener('click', () => {
        if (!currentCard || typeof URL.createObjectURL !== 'function') return;
        const url = URL.createObjectURL(svgBlob(currentCard));
        const link = document.createElement('a');
        link.href = url;
        link.download = cardFilename(currentCard, 'svg');
        document.body.append(link);
        link.click();
        link.remove();
        window.setTimeout(() => URL.revokeObjectURL(url), 30000);
      });
    }

    const pngButton = document.querySelector('#generate-png');
    const pngPreview = document.querySelector('#png-preview');
    const pngImage = document.querySelector('#png-image');
    const pngDownload = document.querySelector('#download-png');
    const pngStatus = document.querySelector('#png-status');
    let pngURL = null;
    let pngGeneration = 0;

    const clearPNG = () => {
      pngGeneration += 1;
      if (pngImage) pngImage.removeAttribute('src');
      if (pngDownload) pngDownload.removeAttribute('href');
      if (pngURL) URL.revokeObjectURL(pngURL);
      pngURL = null;
      if (pngPreview) pngPreview.hidden = true;
      if (pngStatus) pngStatus.textContent = '';
      if (pngButton) {
        pngButton.disabled = false;
        pngButton.textContent = '生成 PNG 图片';
      }
    };

    const renderPNG = async (card) => {
      const sourceURL = URL.createObjectURL(svgBlob(card));
      try {
        const image = new Image();
        await new Promise((resolve, reject) => {
          image.onload = resolve;
          image.onerror = () => reject(new Error('图片加载失败'));
          image.src = sourceURL;
        });
        const canvas = document.createElement('canvas');
        canvas.width = 2240;
        canvas.height = 1360;
        const context = canvas.getContext('2d');
        if (!context) throw new Error('无法创建画布');
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        return await new Promise((resolve, reject) => {
          canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error('图片转换失败')), 'image/png');
        });
      } finally {
        URL.revokeObjectURL(sourceURL);
      }
    };

    if (pngButton && pngPreview && pngImage && pngDownload && pngStatus) {
      pngButton.addEventListener('click', async () => {
        if (!currentCard || pngButton.disabled) return;
        clearPNG();
        const generation = pngGeneration;
        const card = { ...currentCard };
        pngButton.disabled = true;
        pngButton.textContent = '正在生成…';
        pngStatus.textContent = '正在生成 PNG 图片，请稍候。';
        try {
          const blob = await renderPNG(card);
          if (generation !== pngGeneration) return;
          pngURL = URL.createObjectURL(blob);
          pngImage.src = pngURL;
          pngDownload.href = pngURL;
          pngDownload.download = cardFilename(card, 'png');
          pngPreview.hidden = false;
          pngStatus.textContent = '图片已生成，可下载 PNG；手机也可长按图片保存。';
          pngPreview.scrollIntoView({ block: 'nearest', behavior: reduceMotion() ? 'instant' : 'smooth' });
        } catch {
          if (generation !== pngGeneration) return;
          pngStatus.textContent = 'PNG 生成失败，请重试，或选择下载 SVG。';
        } finally {
          if (generation === pngGeneration) {
            pngButton.disabled = false;
            pngButton.textContent = '生成 PNG 图片';
          }
        }
      });
    }

    const filterButtons = Array.from(document.querySelectorAll('button[data-filter]'));
    const newsArticles = Array.from(document.querySelectorAll('article[data-category]'));
    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const category = button.dataset.filter;
        filterButtons.forEach((filter) => {
          const active = filter === button;
          filter.setAttribute('aria-pressed', String(active));
          filter.classList.toggle('is-active', active);
        });
        newsArticles.forEach((article) => {
          article.hidden = category !== 'all' && !article.dataset.category.split(/\s+/).includes(category);
        });
      });
    });

    if (backToTop) {
      let scrollFramePending = false;
      const updateBackToTop = () => {
        const isVisible = window.scrollY > 600;
        backToTop.classList.toggle('is-visible', isVisible);
        backToTop.setAttribute('aria-hidden', String(!isVisible));
        backToTop.tabIndex = isVisible ? 0 : -1;
        scrollFramePending = false;
      };
      window.addEventListener('scroll', () => {
        if (scrollFramePending) return;
        scrollFramePending = true;
        window.requestAnimationFrame(updateBackToTop);
      }, { passive: true });
      backToTop.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: reduceMotion() ? 'auto' : 'smooth' });
      });
      updateBackToTop();
    }

    document.documentElement.classList.add('js-ready');
  });
})();
