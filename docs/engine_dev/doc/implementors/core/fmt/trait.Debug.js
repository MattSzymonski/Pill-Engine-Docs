(function() {var implementors = {};
implementors["pill_core"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"pill_core/error/enum.EngineError.html\" title=\"enum pill_core::error::EngineError\">EngineError</a>&lt;'a&gt;","synthetic":false,"types":["pill_core::error::EngineError"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pill_core/pill_slotmap/struct.Slot.html\" title=\"struct pill_core::pill_slotmap::Slot\">Slot</a>&lt;T&gt;","synthetic":false,"types":["pill_core::pill_slotmap::Slot"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"pill_core/pill_slotmap/trait.PillSlotMapKey.html\" title=\"trait pill_core::pill_slotmap::PillSlotMapKey\">PillSlotMapKey</a>, V:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pill_core/pill_slotmap/struct.PillSlotMap.html\" title=\"struct pill_core::pill_slotmap::PillSlotMap\">PillSlotMap</a>&lt;K, V&gt;","synthetic":false,"types":["pill_core::pill_slotmap::PillSlotMap"]},{"text":"impl&lt;'a, K:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + 'a + <a class=\"trait\" href=\"pill_core/pill_slotmap/trait.PillSlotMapKey.html\" title=\"trait pill_core::pill_slotmap::PillSlotMapKey\">PillSlotMapKey</a>, V:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pill_core/pill_slotmap/struct.Iter.html\" title=\"struct pill_core::pill_slotmap::Iter\">Iter</a>&lt;'a, K, V&gt;","synthetic":false,"types":["pill_core::pill_slotmap::Iter"]},{"text":"impl&lt;'a, K:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + 'a + <a class=\"trait\" href=\"pill_core/pill_slotmap/trait.PillSlotMapKey.html\" title=\"trait pill_core::pill_slotmap::PillSlotMapKey\">PillSlotMapKey</a>, V:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pill_core/pill_slotmap/struct.IterMut.html\" title=\"struct pill_core::pill_slotmap::IterMut\">IterMut</a>&lt;'a, K, V&gt;","synthetic":false,"types":["pill_core::pill_slotmap::IterMut"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pill_core/pill_slotmap/struct.PillSlotMapKeyData.html\" title=\"struct pill_core::pill_slotmap::PillSlotMapKeyData\">PillSlotMapKeyData</a>","synthetic":false,"types":["pill_core::pill_slotmap::PillSlotMapKeyData"]}];
implementors["pill_engine"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pill_engine/resources/mesh/struct.MeshHandle.html\" title=\"struct pill_engine::resources::mesh::MeshHandle\">MeshHandle</a>","synthetic":false,"types":["pill_engine::resources::mesh::MeshHandle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pill_engine/resources/mesh/struct.MeshVertex.html\" title=\"struct pill_engine::resources::mesh::MeshVertex\">MeshVertex</a>","synthetic":false,"types":["pill_engine::resources::mesh::MeshVertex"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pill_engine/resources/texture/struct.TextureHandle.html\" title=\"struct pill_engine::resources::texture::TextureHandle\">TextureHandle</a>","synthetic":false,"types":["pill_engine::resources::texture::TextureHandle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"pill_engine/resources/texture/enum.TextureType.html\" title=\"enum pill_engine::resources::texture::TextureType\">TextureType</a>","synthetic":false,"types":["pill_engine::resources::texture::TextureType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"pill_engine/resources/material/enum.MaterialParameter.html\" title=\"enum pill_engine::resources::material::MaterialParameter\">MaterialParameter</a>","synthetic":false,"types":["pill_engine::resources::material::MaterialParameter"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pill_engine/resources/material/struct.MaterialHandle.html\" title=\"struct pill_engine::resources::material::MaterialHandle\">MaterialHandle</a>","synthetic":false,"types":["pill_engine::resources::material::MaterialHandle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pill_engine/resources/sound/struct.SoundHandle.html\" title=\"struct pill_engine::resources::sound::SoundHandle\">SoundHandle</a>","synthetic":false,"types":["pill_engine::resources::sound::SoundHandle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pill_engine/graphics/renderer/struct.RendererMaterialHandle.html\" title=\"struct pill_engine::graphics::renderer::RendererMaterialHandle\">RendererMaterialHandle</a>","synthetic":false,"types":["pill_engine::graphics::renderer::RendererMaterialHandle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pill_engine/graphics/renderer/struct.RendererMeshHandle.html\" title=\"struct pill_engine::graphics::renderer::RendererMeshHandle\">RendererMeshHandle</a>","synthetic":false,"types":["pill_engine::graphics::renderer::RendererMeshHandle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pill_engine/graphics/renderer/struct.RendererPipelineHandle.html\" title=\"struct pill_engine::graphics::renderer::RendererPipelineHandle\">RendererPipelineHandle</a>","synthetic":false,"types":["pill_engine::graphics::renderer::RendererPipelineHandle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pill_engine/graphics/renderer/struct.RendererCameraHandle.html\" title=\"struct pill_engine::graphics::renderer::RendererCameraHandle\">RendererCameraHandle</a>","synthetic":false,"types":["pill_engine::graphics::renderer::RendererCameraHandle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pill_engine/graphics/renderer/struct.RendererTextureHandle.html\" title=\"struct pill_engine::graphics::renderer::RendererTextureHandle\">RendererTextureHandle</a>","synthetic":false,"types":["pill_engine::graphics::renderer::RendererTextureHandle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"pill_engine/graphics/renderer/enum.RendererError.html\" title=\"enum pill_engine::graphics::renderer::RendererError\">RendererError</a>","synthetic":false,"types":["pill_engine::graphics::renderer::RendererError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pill_engine/graphics/render_queue/struct.RenderQueueItem.html\" title=\"struct pill_engine::graphics::render_queue::RenderQueueItem\">RenderQueueItem</a>","synthetic":false,"types":["pill_engine::graphics::render_queue::RenderQueueItem"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pill_engine/ecs/entity/struct.EntityHandle.html\" title=\"struct pill_engine::ecs::entity::EntityHandle\">EntityHandle</a>","synthetic":false,"types":["pill_engine::ecs::entity::EntityHandle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pill_engine/ecs/scene_manager/struct.SceneHandle.html\" title=\"struct pill_engine::ecs::scene_manager::SceneHandle\">SceneHandle</a>","synthetic":false,"types":["pill_engine::ecs::scene_manager::SceneHandle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"pill_engine/ecs/components/audio_manager_component/enum.SoundType.html\" title=\"enum pill_engine::ecs::components::audio_manager_component::SoundType\">SoundType</a>","synthetic":false,"types":["pill_engine::ecs::components::audio_manager_component::SoundType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"pill_engine/ecs/systems/system_manager/enum.UpdatePhase.html\" title=\"enum pill_engine::ecs::systems::system_manager::UpdatePhase\">UpdatePhase</a>","synthetic":false,"types":["pill_engine::ecs::systems::system_manager::UpdatePhase"]}];
implementors["pill_renderer"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pill_renderer/resources/renderer_texture/struct.RendererTextureHandle.html\" title=\"struct pill_renderer::resources::renderer_texture::RendererTextureHandle\">RendererTextureHandle</a>","synthetic":false,"types":["pill_renderer::resources::renderer_texture::RendererTextureHandle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pill_renderer/resources/renderer_camera/struct.CameraUniform.html\" title=\"struct pill_renderer::resources::renderer_camera::CameraUniform\">CameraUniform</a>","synthetic":false,"types":["pill_renderer::resources::renderer_camera::CameraUniform"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pill_renderer/resources/renderer_camera/struct.RendererCamera.html\" title=\"struct pill_renderer::resources::renderer_camera::RendererCamera\">RendererCamera</a>","synthetic":false,"types":["pill_renderer::resources::renderer_camera::RendererCamera"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pill_renderer/resources/renderer_material/struct.MaterialUniform.html\" title=\"struct pill_renderer::resources::renderer_material::MaterialUniform\">MaterialUniform</a>","synthetic":false,"types":["pill_renderer::resources::renderer_material::MaterialUniform"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()