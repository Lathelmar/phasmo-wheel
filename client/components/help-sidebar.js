import {html} from '../lib/lit-html.js';
import BaseElement from '../BaseElement.js';

class ItemSidebar extends BaseElement {
  render() {
    return html`
      <div class="wrapper">
        <h2>Aide &amp; A propos</h2>
        <h3>Aide</h3>
        <ul>
          <li>Cliquez sur le nom d'un joueur &agrave; modifier.</li>
          <li>Cliquez sur une roulette pour la faire tourner ou cliquez sur "Tout tourner" pour les faire tourner toutes en m&ecirc;me temps.</li>
          <li>Une fois que les roues se sont arr&ecirc;t&eacute;es, vous pouvez voir les d&eacute;tails des r&egrave;gles en cliquant sur l'ic&ocirc;ne <i class="icon help"></i> &agrave; c&ocirc;t&eacute; d'elles.</li>
          <li>Utilisez les panneaux <span><i class="icon team"></i> R&egrave;gles d'&eacute;quipe</span> et <span><i class="icon personal"></i> R&egrave;gles personnelles</span> pour activer et d&eacute;sactiver les r&egrave;gles dans la roue.</li>
          <li>V&eacute;rifiez les <span><i class="icon items"></i> &eacute;quipements &agrave; prendre</span> pour voir ce qu'il faut apporter en fonction des restrictions des r&egrave;gles.</li>
          <li>L'URL se met &agrave; jour au fur et &agrave; mesure que les r&egrave;gles changent permettant de partager la partie avec les membres de l'&eacute;quipe, ou partager vos presets de r&egrave;gles pr&eacute;f&eacute;r&eacute;s</li>
          </ul>
          <h3>&Agrave; propos</h3>
          <ul>
          <li>Phasmo-Wheel est inspir&eacute; par le travail de sullyr0x et de nombreux contributeurs.</li>
          <li><a href="https://discord.gg/UPEceAz" target="_blank" rel="noopener">Phasmo-Wheel Discord</a> pour en savoir plus.</li>
          <li>Site cr&eacute;&eacute; par <a href="https://steamcommunity.com/profiles/76561198042481118/" target="_blank" rel="noopener">Koga</a> (Traduction FR et edits Ramlethal).</li>
          <li>Code open-source sur <a href="https://github.com/samanime/phasmo-wheel" target="_blank" rel="noopener">GitHub</a>.</li>
        </ul>
      </div>
    `;
  }
}

customElements.define('help-sidebar', ItemSidebar);