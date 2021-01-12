<h1 id="social-progress-index-vs.-style-of-government">Social Progress Index vs. Style of Government</h1>
<h2 id="data-loadingpreprocessing">Data Loading/Preprocessing</h2>
<div class="sourceCode" id="cb1"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="co"># imports</span></span>
<span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> numpy <span class="im">as</span> np</span>
<span id="cb1-3"><a href="#cb1-3" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> pandas <span class="im">as</span> pd</span>
<span id="cb1-4"><a href="#cb1-4" aria-hidden="true" tabindex="-1"></a><span class="im">from</span> matplotlib <span class="im">import</span> pyplot <span class="im">as</span> plt</span>
<span id="cb1-5"><a href="#cb1-5" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> seaborn <span class="im">as</span> sns</span></code></pre></div>
<div class="sourceCode" id="cb2"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a>spiData <span class="op">=</span> pd.read_csv(<span class="st">&#39;SPIData.csv&#39;</span>)</span></code></pre></div>
<div class="sourceCode" id="cb3"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a>spiData <span class="op">=</span> pd.DataFrame(pd.concat([spiData[<span class="st">&#39;Country&#39;</span>],spiData[<span class="st">&#39;SPI year&#39;</span>],spiData[<span class="st">&#39;Social Progress Index&#39;</span>]],axis<span class="op">=</span><span class="dv">1</span>))</span></code></pre></div>
<div class="sourceCode" id="cb4"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="co"># Making sure row is for 2020</span></span>
<span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a><span class="cf">for</span> index, row <span class="kw">in</span> spiData.iterrows():</span>
<span id="cb4-3"><a href="#cb4-3" aria-hidden="true" tabindex="-1"></a>    <span class="cf">if</span> row[<span class="st">&#39;SPI year&#39;</span>]<span class="op">!=</span><span class="dv">2020</span>:</span>
<span id="cb4-4"><a href="#cb4-4" aria-hidden="true" tabindex="-1"></a>        spiData.drop(index, inplace<span class="op">=</span><span class="va">True</span>)</span></code></pre></div>
<div class="sourceCode" id="cb5"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a>spiData <span class="op">=</span> pd.DataFrame(pd.concat([spiData[<span class="st">&#39;Country&#39;</span>],spiData[<span class="st">&#39;Social Progress Index&#39;</span>]],axis<span class="op">=</span><span class="dv">1</span>))</span></code></pre></div>
<div class="sourceCode" id="cb6"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a>democracyData <span class="op">=</span> pd.read_csv(<span class="st">&#39;DemocracyData.csv&#39;</span>)</span></code></pre></div>
<div class="sourceCode" id="cb7"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a>democracyData <span class="op">=</span> pd.DataFrame(pd.concat([democracyData[<span class="st">&#39;name&#39;</span>],democracyData[<span class="st">&#39;time&#39;</span>],democracyData[<span class="st">&#39;Democracy index (EIU)&#39;</span>]],axis<span class="op">=</span><span class="dv">1</span>))</span></code></pre></div>
<div class="sourceCode" id="cb8"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="co"># Making sure row is for 2020</span></span>
<span id="cb8-2"><a href="#cb8-2" aria-hidden="true" tabindex="-1"></a><span class="cf">for</span> index, row <span class="kw">in</span> democracyData.iterrows():</span>
<span id="cb8-3"><a href="#cb8-3" aria-hidden="true" tabindex="-1"></a>    <span class="cf">if</span> row[<span class="st">&#39;time&#39;</span>]<span class="op">!=</span><span class="dv">2019</span>:</span>
<span id="cb8-4"><a href="#cb8-4" aria-hidden="true" tabindex="-1"></a>        democracyData.drop(index, inplace<span class="op">=</span><span class="va">True</span>)</span></code></pre></div>
<div class="sourceCode" id="cb9"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a>democracyData <span class="op">=</span> democracyData.drop(columns<span class="op">=</span>[<span class="st">&#39;time&#39;</span>])</span></code></pre></div>
<div class="sourceCode" id="cb10"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a>data <span class="op">=</span> []</span>
<span id="cb10-2"><a href="#cb10-2" aria-hidden="true" tabindex="-1"></a>countries <span class="op">=</span> []</span></code></pre></div>
<div class="sourceCode" id="cb11"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb11-1"><a href="#cb11-1" aria-hidden="true" tabindex="-1"></a><span class="cf">for</span> index, row <span class="kw">in</span> spiData.iterrows():</span>
<span id="cb11-2"><a href="#cb11-2" aria-hidden="true" tabindex="-1"></a>    country <span class="op">=</span> row[<span class="st">&#39;Country&#39;</span>]</span>
<span id="cb11-3"><a href="#cb11-3" aria-hidden="true" tabindex="-1"></a>    socialProgressIndex <span class="op">=</span> row[<span class="st">&#39;Social Progress Index&#39;</span>]</span>
<span id="cb11-4"><a href="#cb11-4" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb11-5"><a href="#cb11-5" aria-hidden="true" tabindex="-1"></a>    <span class="cf">for</span> i, r <span class="kw">in</span> democracyData.iterrows():</span>
<span id="cb11-6"><a href="#cb11-6" aria-hidden="true" tabindex="-1"></a>        newCountry <span class="op">=</span> r[<span class="st">&#39;name&#39;</span>]</span>
<span id="cb11-7"><a href="#cb11-7" aria-hidden="true" tabindex="-1"></a>        democracyIndex <span class="op">=</span> r[<span class="st">&#39;Democracy index (EIU)&#39;</span>]</span>
<span id="cb11-8"><a href="#cb11-8" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb11-9"><a href="#cb11-9" aria-hidden="true" tabindex="-1"></a>        <span class="cf">if</span> country<span class="op">==</span>newCountry:</span>
<span id="cb11-10"><a href="#cb11-10" aria-hidden="true" tabindex="-1"></a>            countries.append([country])</span>
<span id="cb11-11"><a href="#cb11-11" aria-hidden="true" tabindex="-1"></a>            data.append([socialProgressIndex,democracyIndex])</span></code></pre></div>
<div class="sourceCode" id="cb12"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a>X <span class="op">=</span> pd.DataFrame(data)[<span class="dv">0</span>]</span>
<span id="cb12-2"><a href="#cb12-2" aria-hidden="true" tabindex="-1"></a>y <span class="op">=</span> pd.DataFrame(data)[<span class="dv">1</span>]</span></code></pre></div>
<h2 id="data-visualization">Data Visualization</h2>
<div class="sourceCode" id="cb13"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb13-1"><a href="#cb13-1" aria-hidden="true" tabindex="-1"></a>plt.scatter(X,y)</span></code></pre></div>
<pre><code>&lt;matplotlib.collections.PathCollection at 0x7f8b5739f7c0&gt;</code></pre>
<figure>
<img src="modeling_files/modeling_15_1.svg" alt="svg" /><figcaption aria-hidden="true">svg</figcaption>
</figure>
<div class="sourceCode" id="cb15"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb15-1"><a href="#cb15-1" aria-hidden="true" tabindex="-1"></a>x <span class="op">=</span> pd.DataFrame(data)</span></code></pre></div>
<h2 id="kmeans-clustering">KMeans Clustering</h2>
<div class="sourceCode" id="cb16"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb16-1"><a href="#cb16-1" aria-hidden="true" tabindex="-1"></a><span class="im">from</span> sklearn.cluster <span class="im">import</span> KMeans</span>
<span id="cb16-2"><a href="#cb16-2" aria-hidden="true" tabindex="-1"></a><span class="im">from</span> sklearn <span class="im">import</span> preprocessing</span></code></pre></div>
<div class="sourceCode" id="cb17"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb17-1"><a href="#cb17-1" aria-hidden="true" tabindex="-1"></a>x <span class="op">=</span> preprocessing.scale(x)</span></code></pre></div>
<div class="sourceCode" id="cb18"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb18-1"><a href="#cb18-1" aria-hidden="true" tabindex="-1"></a>wcss <span class="op">=</span> []</span>
<span id="cb18-2"><a href="#cb18-2" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb18-3"><a href="#cb18-3" aria-hidden="true" tabindex="-1"></a><span class="cf">for</span> i <span class="kw">in</span> <span class="bu">range</span>(<span class="dv">1</span>,<span class="dv">10</span>):</span>
<span id="cb18-4"><a href="#cb18-4" aria-hidden="true" tabindex="-1"></a>    kmeans <span class="op">=</span> KMeans(i)</span>
<span id="cb18-5"><a href="#cb18-5" aria-hidden="true" tabindex="-1"></a>    kmeans.fit(x)</span>
<span id="cb18-6"><a href="#cb18-6" aria-hidden="true" tabindex="-1"></a>    wcss.append(kmeans.inertia_)</span></code></pre></div>
<div class="sourceCode" id="cb19"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb19-1"><a href="#cb19-1" aria-hidden="true" tabindex="-1"></a>plt.plot(<span class="bu">range</span>(<span class="dv">1</span>,<span class="dv">10</span>),wcss)</span>
<span id="cb19-2"><a href="#cb19-2" aria-hidden="true" tabindex="-1"></a>plt.ylabel(<span class="st">&#39;WCSS&#39;</span>)</span>
<span id="cb19-3"><a href="#cb19-3" aria-hidden="true" tabindex="-1"></a>plt.xlabel(<span class="st">&#39;# of cluster&#39;</span>)</span></code></pre></div>
<pre><code>Text(0.5, 0, &#39;# of cluster&#39;)</code></pre>
<figure>
<img src="modeling_files/modeling_21_1.svg" alt="svg" /><figcaption aria-hidden="true">svg</figcaption>
</figure>
<div class="sourceCode" id="cb21"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb21-1"><a href="#cb21-1" aria-hidden="true" tabindex="-1"></a>kmeans <span class="op">=</span> KMeans(<span class="dv">5</span>)</span>
<span id="cb21-2"><a href="#cb21-2" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb21-3"><a href="#cb21-3" aria-hidden="true" tabindex="-1"></a>identified_clusters <span class="op">=</span> kmeans.fit_predict(x)</span>
<span id="cb21-4"><a href="#cb21-4" aria-hidden="true" tabindex="-1"></a>identified_clusters</span>
<span id="cb21-5"><a href="#cb21-5" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb21-6"><a href="#cb21-6" aria-hidden="true" tabindex="-1"></a>data_w_cluster <span class="op">=</span> pd.DataFrame(x.copy())</span>
<span id="cb21-7"><a href="#cb21-7" aria-hidden="true" tabindex="-1"></a>data_w_cluster[<span class="st">&#39;Cluster&#39;</span>] <span class="op">=</span> identified_clusters</span>
<span id="cb21-8"><a href="#cb21-8" aria-hidden="true" tabindex="-1"></a>data_w_cluster <span class="op">=</span> data_w_cluster.rename(columns<span class="op">=</span>{<span class="dv">0</span>: <span class="st">&quot;SPI&quot;</span>, <span class="dv">1</span>: <span class="st">&quot;Democracy Index&quot;</span>})</span>
<span id="cb21-9"><a href="#cb21-9" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb21-10"><a href="#cb21-10" aria-hidden="true" tabindex="-1"></a>data_w_cluster <span class="op">=</span> pd.concat([data_w_cluster,pd.DataFrame(countries)],axis<span class="op">=</span><span class="dv">1</span>)</span></code></pre></div>
<div class="sourceCode" id="cb22"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb22-1"><a href="#cb22-1" aria-hidden="true" tabindex="-1"></a>plt.scatter(data_w_cluster[<span class="st">&#39;SPI&#39;</span>],data_w_cluster[<span class="st">&#39;Democracy Index&#39;</span>],c<span class="op">=</span>data_w_cluster[<span class="st">&#39;Cluster&#39;</span>],cmap<span class="op">=</span><span class="st">&#39;rainbow&#39;</span>)</span></code></pre></div>
<pre><code>&lt;matplotlib.collections.PathCollection at 0x7f8b58524b20&gt;</code></pre>
<figure>
<img src="modeling_files/modeling_23_1.svg" alt="svg" /><figcaption aria-hidden="true">svg</figcaption>
</figure>
<h1 id="groupsclusters">5 Groups/Clusters</h1>
<div class="sourceCode" id="cb24"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb24-1"><a href="#cb24-1" aria-hidden="true" tabindex="-1"></a>group1 <span class="op">=</span> []</span>
<span id="cb24-2"><a href="#cb24-2" aria-hidden="true" tabindex="-1"></a>group2 <span class="op">=</span> []</span>
<span id="cb24-3"><a href="#cb24-3" aria-hidden="true" tabindex="-1"></a>group3 <span class="op">=</span> []</span>
<span id="cb24-4"><a href="#cb24-4" aria-hidden="true" tabindex="-1"></a>group4 <span class="op">=</span> []</span>
<span id="cb24-5"><a href="#cb24-5" aria-hidden="true" tabindex="-1"></a>group5 <span class="op">=</span> []</span></code></pre></div>
<div class="sourceCode" id="cb25"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb25-1"><a href="#cb25-1" aria-hidden="true" tabindex="-1"></a><span class="cf">for</span> i,r <span class="kw">in</span> data_w_cluster.iterrows():</span>
<span id="cb25-2"><a href="#cb25-2" aria-hidden="true" tabindex="-1"></a>    <span class="cf">if</span> r[<span class="st">&#39;Cluster&#39;</span>]<span class="op">==</span><span class="dv">0</span>:</span>
<span id="cb25-3"><a href="#cb25-3" aria-hidden="true" tabindex="-1"></a>        group1.append(r[<span class="dv">0</span>])</span>
<span id="cb25-4"><a href="#cb25-4" aria-hidden="true" tabindex="-1"></a>    <span class="cf">elif</span> r[<span class="st">&#39;Cluster&#39;</span>]<span class="op">==</span><span class="dv">1</span>:</span>
<span id="cb25-5"><a href="#cb25-5" aria-hidden="true" tabindex="-1"></a>        group2.append(r[<span class="dv">0</span>])</span>
<span id="cb25-6"><a href="#cb25-6" aria-hidden="true" tabindex="-1"></a>    <span class="cf">elif</span> r[<span class="st">&#39;Cluster&#39;</span>]<span class="op">==</span><span class="dv">2</span>:</span>
<span id="cb25-7"><a href="#cb25-7" aria-hidden="true" tabindex="-1"></a>        group3.append(r[<span class="dv">0</span>])</span>
<span id="cb25-8"><a href="#cb25-8" aria-hidden="true" tabindex="-1"></a>    <span class="cf">elif</span> r[<span class="st">&#39;Cluster&#39;</span>]<span class="op">==</span><span class="dv">3</span>:</span>
<span id="cb25-9"><a href="#cb25-9" aria-hidden="true" tabindex="-1"></a>        group4.append(r[<span class="dv">0</span>])</span>
<span id="cb25-10"><a href="#cb25-10" aria-hidden="true" tabindex="-1"></a>    <span class="cf">elif</span> r[<span class="st">&#39;Cluster&#39;</span>]<span class="op">==</span><span class="dv">4</span>:</span>
<span id="cb25-11"><a href="#cb25-11" aria-hidden="true" tabindex="-1"></a>        group5.append(r[<span class="dv">0</span>])</span></code></pre></div>
<h2 id="group-1---the-purple">Group 1 - The Purple</h2>
<h4 id="countries-list-australia-austria-belgium-canada-costa-rica-cyprus-denmark-estonia-finland-france-germany-greece-chile-iceland-ireland-israel-italy-japan-latvia-lithuania-luxembourg-malta-mauritius-netherlands-new-zealand-norway-portugal-slovenia-spain-sweden-switzerland-united-kingdom-united-states-uruguay">Countries list: Australia Austria Belgium Canada Costa Rica Cyprus Denmark Estonia Finland France Germany Greece Chile Iceland Ireland Israel Italy Japan Latvia Lithuania Luxembourg Malta Mauritius Netherlands New Zealand Norway Portugal Slovenia Spain Sweden Switzerland United Kingdom United States Uruguay</h4>
<h2 id="takeaways">Takeaways</h2>
<ol type="1">
<li>These countries are the ones with the strongest democracies and highest SPIs</li>
<li>The countries on the lower spectrum (i.e. the US) are economy centric societies</li>
<li>The countries performing the best are social democratic countries (i.e. Norway) that focus more on people</li>
</ol>
<h2 id="group-2---the-green">Group 2 - The Green</h2>
<h4 id="algeria-azerbaijan-bahrain-belarus-cuba-egypt-gabon-china-iran-iraq-jordan-kazakhstan-kuwait-lebanon-nicaragua-oman-qatar-russia-saudi-arabia-turkey-turkmenistan-united-arab-emirates-uzbekistan-vietnam">Algeria Azerbaijan Bahrain Belarus Cuba Egypt Gabon China Iran Iraq Jordan Kazakhstan Kuwait Lebanon Nicaragua Oman Qatar Russia Saudi Arabia Turkey Turkmenistan United Arab Emirates Uzbekistan Vietnam</h4>
<h3 id="takeaways-1">Takeaways</h3>
<ol type="1">
<li>These countries are placing very low in the democracy index but they have a relatively high social progress indexes.</li>
<li>Most of these countries have bad human rights records, causing a lower SPI in some of them.</li>
<li>Most of these countries have a solid economy and reasonable living conditions for most people, resulting in increases in their social progress index</li>
<li>Gender equality is close to 0 in many of these countries, resulting in a lower SPI for a variety of reasons (gender equity in education lowers TFR)</li>
</ol>
<h2 id="group-3---turquoise">Group 3 - turquoise</h2>
<h4 id="bangladesh-benin-guatemala-haiti-honduras-india-kenya-lesotho-liberia-madagascar-malawi-mali-nepal-papua-new-guinea-senegal-sierra-leone-tanzania-timor-leste-uganda-zambia">Bangladesh Benin Guatemala Haiti Honduras India Kenya Lesotho Liberia Madagascar Malawi Mali Nepal Papua New Guinea Senegal Sierra Leone Tanzania Timor-Leste Uganda Zambia</h4>
<h3 id="takeaways-2">Takeaways</h3>
<ol type="1">
<li>Most of these are in the middle of both the democracy index and SPI.</li>
<li>Some have a lower SPI due to religious persecution and treatment of minorities.</li>
<li>Others have gone through recent natural disasters</li>
</ol>
<h2 id="group-4---orange">Group 4 - Orange</h2>
<h4 id="afghanistan-angola-burkina-faso-burundi-cambodia-cameroon-central-african-republic-djibouti-equatorial-guinea-eritrea-ethiopia-guinea-guinea-bissau-chad-mauritania-mozambique-myanmar-niger-nigeria-pakistan-rwanda-sudan-tajikistan-togo-zimbabwe">Afghanistan Angola Burkina Faso Burundi Cambodia Cameroon Central African Republic Djibouti Equatorial Guinea Eritrea Ethiopia Guinea Guinea-Bissau Chad Mauritania Mozambique Myanmar Niger Nigeria Pakistan Rwanda Sudan Tajikistan Togo Zimbabwe</h4>
<h3 id="takeaways-3">Takeaways:</h3>
<ol type="1">
<li>Most of these countries are low in both the democracy index and social progress index.</li>
<li>Many of these countries are in sub saharan Africa</li>
<li>Terrorism has also caused many countries to be in this cluster</li>
</ol>
<h2 id="group-5---red">Group 5 - Red</h2>
<h4 id="albania-argentina-armenia-bhutan-bolivia-bosnia-and-herzegovina-botswana-brazil-bulgaria-colombia-croatia-dominican-republic-ecuador-el-salvador-fiji-georgia-ghana-guyana-hungary-indonesia-jamaica-malaysia-mexico-moldova-mongolia-montenegro-morocco-namibia-panama-paraguay-peru-philippines-poland-romania-serbia-singapore-south-africa-sri-lanka-suriname-thailand-trinidad-and-tobago-tunisia-ukraine">Albania Argentina Armenia Bhutan Bolivia Bosnia and Herzegovina Botswana Brazil Bulgaria Colombia Croatia Dominican Republic Ecuador El Salvador Fiji Georgia Ghana Guyana Hungary Indonesia Jamaica Malaysia Mexico Moldova Mongolia Montenegro Morocco Namibia Panama Paraguay Peru Philippines Poland Romania Serbia Singapore South Africa Sri Lanka Suriname Thailand Trinidad and Tobago Tunisia Ukraine</h4>
<h3 id="takeaways-4">Takeaways</h3>
<ol type="1">
<li>These countries are close to the purple, and are nearing the top right, which is where we want all countries to be</li>
<li>Getting the world to a 75 SPI will require getting these countries to well past 75</li>
<li>The main issues in most of these countries are an absence of opportunity and not accepting minorities</li>
</ol>
